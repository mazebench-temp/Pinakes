// Loading the content tree: library (authors → works → books), index entries, quotes.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { splitFrontMatter } from './frontmatter.mjs';
import { parseBekker, bekkerLabel } from './refs.mjs';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const CONTENT = path.join(ROOT, 'content');
export const rel = p => path.relative(ROOT, p);

export const readJson = p => JSON.parse(fs.readFileSync(p, 'utf8'));
export const exists = p => fs.existsSync(p);

export function walk(dir, test = () => true) {
  if (!exists(dir)) return [];
  const out = [];
  for (const name of fs.readdirSync(dir).sort()) {
    if (name.startsWith('.')) continue;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) out.push(...walk(full, test));
    else if (test(full)) out.push(full);
  }
  return out;
}

export const bookFile = (template, book) => template.replace('{book}', String(book).padStart(2, '0'));

/** Line keys as written in a work's files: verse numbers ("396"), or Bekker lines ("1451a36") coded as integers. */
export const lineParser = work => work?.citation?.scheme === 'bekker' ? parseBekker : s => { const n = Number(s); return Number.isInteger(n) ? n : null; };
export const lineKey = work => work?.citation?.scheme === 'bekker' ? bekkerLabel : String;

/**
 * A verse/section text file: "<line>\t<text>" rows; "#" lines are comments. Lines are numbers, or for a
 * Bekker work labels like "1447a8", returned as their integer codes; they must run in order.
 */
export function readLines(file, parse = lineParser(null)) {
  const rows = new Map();
  let last = -Infinity;
  fs.readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (!line.trim() || line.startsWith('#')) return;
    const tab = line.indexOf('\t');
    if (tab < 0) throw new Error(`${rel(file)}:${i + 1}: expected "<line>\\t<text>"`);
    const n = parse(line.slice(0, tab));
    if (n === null) throw new Error(`${rel(file)}:${i + 1}: bad line number "${line.slice(0, tab)}"`);
    if (rows.has(n)) throw new Error(`${rel(file)}:${i + 1}: duplicate line ${line.slice(0, tab)}`);
    if (n < last) throw new Error(`${rel(file)}:${i + 1}: line ${line.slice(0, tab)} is out of order`);
    last = n;
    rows.set(n, line.slice(tab + 1).trim());
  });
  return rows;
}

/** Structure and lexicon files of a Bekker work name lines by label; the build uses the integer codes. */
function codeStructure(s, parse, file) {
  const at = v => {
    if (typeof v === 'number') return v;
    const n = parse(String(v));
    if (n === null) throw new Error(`${rel(file)}: bad line "${v}"`);
    return n;
  };
  for (const list of [s.scenes, s.speeches, s.days, s.quotations]) for (const x of list ?? []) { x.from = at(x.from); x.to = at(x.to); }
  return s;
}
function codeLexicon(lex, parse, file) {
  if (!lex) return lex;
  return Object.fromEntries(Object.entries(lex).map(([k, v]) => {
    const n = parse(k);
    if (n === null) throw new Error(`${rel(file)}: bad line "${k}"`);
    return [String(n), v];
  }));
}

/** Authors and works in library order: by their `order`, then by folder name. */
const byOrder = (dir, file) => fs.readdirSync(dir).filter(d => exists(path.join(dir, d, file)))
  .map(d => [d, readJson(path.join(dir, d, file)).order ?? 999]).sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0])).map(([d]) => d);
const authorDirs = libDir => byOrder(libDir, 'author.json');
const workDirs = authorDir => byOrder(authorDir, 'work.json');

export function loadLibrary() {
  const libDir = path.join(CONTENT, 'library');
  const authors = [], works = [];
  for (const authorDir of authorDirs(libDir)) {
    const author = readJson(path.join(libDir, authorDir, 'author.json'));
    authors.push(author);
    for (const workDir of workDirs(path.join(libDir, authorDir))) {
      const wFile = path.join(libDir, authorDir, workDir, 'work.json');
      const work = readJson(wFile);
      const dir = path.dirname(wFile);
      const parse = lineParser(work);
      work.dir = dir;
      work.texts = new Map();
      for (let book = 1; book <= (work.bookCount ?? 1); book++) {
        const primary = path.join(dir, bookFile(work.editions[0].path, book));
        if (!exists(primary)) continue;
        const editions = {};
        for (const ed of work.editions) {
          const file = path.join(dir, bookFile(ed.path, book));
          if (exists(file)) editions[ed.id] = readLines(file, parse);
        }
        const structFile = work.structure && path.join(dir, bookFile(work.structure, book));
        const lexFile = work.lexicon && path.join(dir, bookFile(work.lexicon, book));
        work.texts.set(book, {
          editions,
          structure: structFile && exists(structFile) ? codeStructure(readJson(structFile), parse, structFile) : { scenes: [], speeches: [], days: [] },
          lexicon: lexFile && exists(lexFile) ? codeLexicon(readJson(lexFile), parse, lexFile) : null,
          lexiconFile: lexFile,
        });
      }
      works.push(work);
    }
  }
  return { authors, works };
}

export function loadEntries() {
  const files = walk(path.join(CONTENT, 'index'), f => f.endsWith('.md'));
  return files.map(file => {
    const { data, body } = splitFrontMatter(fs.readFileSync(file, 'utf8'), rel(file));
    return { id: data.id ?? path.basename(file, '.md'), file: rel(file), data, body };
  });
}

/**
 * Scoped notes: what an entry is and does within one author, work or book. The folder is the scope:
 *   content/library/homer/notes/<id>.md              in Homer
 *   content/library/homer/iliad/notes/<id>.md        in the Iliad as a whole
 *   content/library/homer/iliad/notes/02/<id>.md     in Iliad, Book 2
 * The file name is the id of the entry the note belongs to.
 */
export function loadNotes() {
  const libDir = path.join(CONTENT, 'library');
  const out = [];
  const read = (file, scope) => {
    const { data, body } = splitFrontMatter(fs.readFileSync(file, 'utf8'), rel(file));
    out.push({ entryId: path.basename(file, '.md'), file: rel(file), scope, data, body });
  };
  const mdIn = dir => exists(dir) ? fs.readdirSync(dir).sort().filter(n => n.endsWith('.md')).map(n => path.join(dir, n)) : [];
  for (const authorDir of authorDirs(libDir)) {
    const author = readJson(path.join(libDir, authorDir, 'author.json'));
    for (const file of mdIn(path.join(libDir, authorDir, 'notes'))) read(file, { id: author.id, author: author.id });
    for (const workDir of workDirs(path.join(libDir, authorDir))) {
      const wFile = path.join(libDir, authorDir, workDir, 'work.json');
      const work = readJson(wFile);
      const notesDir = path.join(libDir, authorDir, workDir, 'notes');
      for (const file of mdIn(notesDir)) read(file, { id: work.id, author: author.id, work: work.id });
      if (!exists(notesDir)) continue;
      for (const sub of fs.readdirSync(notesDir).sort()) {
        const dir = path.join(notesDir, sub);
        if (!fs.statSync(dir).isDirectory()) continue;
        if (!/^\d+$/.test(sub)) throw new Error(`${rel(dir)}: book folders under notes/ are numbered (01, 02, …)`);
        const book = Number(sub);
        for (const file of mdIn(dir)) read(file, { id: `${work.id}.${book}`, author: author.id, work: work.id, book });
      }
    }
  }
  return out;
}

/** Quote registries live in content/quotes/<work>.json as { work, quotes: [{ id, ref, title? }] }. */
export function loadQuotes() {
  const byId = new Map();
  for (const file of walk(path.join(CONTENT, 'quotes'), f => f.endsWith('.json'))) {
    const reg = readJson(file);
    for (const q of reg.quotes ?? []) {
      if (byId.has(q.id)) throw new Error(`${rel(file)}: duplicate quote id ${q.id}`);
      byId.set(q.id, { ...q, work: q.work ?? reg.work, file: rel(file) });
    }
  }
  return byId;
}
