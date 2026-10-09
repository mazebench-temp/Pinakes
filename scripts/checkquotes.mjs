#!/usr/bin/env node
// Quotation check: every English quotation in an article that is followed by line references, like
//   they veil themselves “in white linen” (3.141)
// must occur in the translation of those lines (give or take a line). Run it after the translation of
// a book changes, to find articles still quoting the old wording. Ellipses (…) split a quotation into
// parts that must each occur. Glosses of a word or two, quotations of other authors, and literal
// renderings of the Greek are reported too; judge those by eye.
// For a work cited by Bekker line (the Poetics, the Rhetoric) the references are Bekker lines, like
//   “the possible means of persuasion” (1355b25–26)
// A bare Bekker reference counts only in the work's own notes; elsewhere the reference must name the
// work (“*Rhetoric* 1.2, 1355b25–26”), since a bare Bekker line could belong to any treatise.
//   node scripts/checkquotes.mjs [work id]        (default: the first work with a translation)
import fs from 'node:fs';
import path from 'node:path';
import { CONTENT, walk, loadLibrary } from './lib/content.mjs';

const { works } = loadLibrary();
const workId = process.argv[2];
const work = works.find(w => (workId ? w.id === workId : [...w.texts.values()].some(t => t.editions.en)));
if (!work) { console.error(`No work ${workId ?? 'with a translation'}`); process.exit(1); }
const en = new Map([...work.texts].map(([book, t]) => [book, t.editions.en ?? new Map()]));

const norm = s => s.normalize('NFC').toLowerCase()
  .replace(/[“”"‘’'`/]/g, '').replace(/[—–-]/g, ' ').replace(/[.,;:!?()[\]]/g, ' ').replace(/\s+/g, ' ').trim();
const files = [path.join(CONTENT, 'index'), path.join(CONTENT, 'library')].flatMap(d => walk(d, f => f.endsWith('.md')));

let checked = 0, missing = 0;
const check = (file, quote, refs, lines) => {
  if (!lines.length) return;
  checked++;
  const hay = norm(lines.join(' '));
  const parts = quote.split(/…|\.\.\./).map(norm).filter(p => p.length > 2);
  if (parts.every(p => hay.includes(p))) return;
  missing++;
  console.log(`${path.relative(CONTENT, file)}: “${quote}” (${refs})`);
};

if (work.citation?.scheme === 'bekker') {
  const rows = new Map();
  for (const t of work.texts.values()) for (const [n, s] of t.editions.en ?? new Map()) rows.set(n, s);
  const ownDir = path.resolve(work.dir) + path.sep;
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const names = [work.title, ...(work.aliases ?? []), work.citation.abbr].filter(Boolean);
  const naming = new RegExp(`(?:^|[^\\p{L}])(?:${names.map(esc).join('|')})(?![\\p{L}])`, 'iu');
  const code = (page, col, line) => +page * 100 + (col === 'b' ? 50 : 0) + +line;
  for (const file of files) {
    const own = path.resolve(file).startsWith(ownDir);
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(/“([^”]{3,300})”[^“”(]{0,40}?\(([^()]*?\d{4}[ab]\d{1,2}[^()]*)\)/g)) {
      const [, quote, refs] = m;
      if (/[Ͱ-Ͽἀ-῿]/.test(quote)) continue; // Greek, not the translation
      const lines = [];
      // Each part of the reference names its work, or is bare: a bare part is this work's only in its own notes.
      for (const part of refs.split(';')) {
        const named = naming.test(part), other = !named && /\p{Lu}\p{Ll}/u.test(part.replace(/\b(?:see|cf)\b/gi, ''));
        if (other || (!named && !own)) continue;
        for (const [, p, c, l, p2, c2, l2] of part.matchAll(/(\d{4})([ab])(\d{1,2})(?:\s*[–-]\s*(?:(\d{4})?([ab]))?(\d{1,2}))?/g)) {
          const from = code(p, c, l), to = l2 ? code(p2 ?? p, c2 ?? c, l2) : from;
          for (let n = from - 1; n <= to + 1; n++) if (rows.has(n)) lines.push(rows.get(n));
        }
      }
      check(file, quote, refs, lines);
    }
  }
  console.log(`${checked} quotations checked against the ${work.title} translation; ${missing} not found (glosses and other authors' words included).`);
  process.exit(0);
}

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(/“([^”]{3,300})”[^“”(]{0,40}?\(((?:Il\.\s*|Iliad\s*)?\d+\.\d+[^)]*)\)/g)) {
    const [, quote, refs] = m;
    if (/[Ͱ-Ͽἀ-῿]/.test(quote)) continue; // Greek, not the translation
    const lines = [];
    // References to the Odyssey ("Od. 11.550", "Odyssey 3.440, 24.275") or the Aeneid ("*Aeneid* 12.438–440")
    // are not lines of this work.
    const own = refs.replace(/(?:\bOd\.|\*?Odyssey\*?|\bAen\.|\*?Aeneid\*?)\s*(?:\d+\.\d+(?:[–-]\d+)?(?:,\s*)?)+/g, '');
    for (const [, b, from, to] of own.matchAll(/(?<![\d.])(\d+)\.(\d+)(?:[–-](\d+))?/g)) {
      const rows = en.get(+b);
      if (rows) for (let n = +from - 1; n <= +(to ?? from) + 1; n++) if (rows.has(n)) lines.push(rows.get(n));
    }
    check(file, quote, refs, lines);
  }
}
console.log(`${checked} quotations checked against the ${work.title} translation; ${missing} not found (glosses and other authors' words included).`);
