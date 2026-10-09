#!/usr/bin/env node
// Lexicon tool: one {w, l, g, p, n?} analysis per token of the Greek, per line, as the build expects.
//   node scripts/lexicon.mjs skeleton <book> <from> <to> [work]   print the tokens of lines from–to, ready to fill in
//   node scripts/lexicon.mjs check <file.json> <book> [work]       validate a filled-in part against the text
//   node scripts/lexicon.mjs merge <book> <file.json>... [--work w] write lexicon/<book>.json from checked parts
//   node scripts/lexicon.mjs lemmas [work]                         print every lemma already analyzed, with gloss and count
// The default work is homer.iliad. Parts may cover any ranges; merge requires every line exactly once.
// Lines are keyed as the text files key them: by number, or for prose by Bekker line (1354a1). Parts and
// ranges may also give a Bekker line as the build's number for it (135401); merge always writes the label.
import fs from 'node:fs';
import path from 'node:path';
import { loadLibrary, bookFile, lineParser } from './lib/content.mjs';
import { bekkerLabel } from './lib/refs.mjs';
import { tokenize, normalize } from './lib/greek.mjs';

export const POS = new Set([
  'verb', 'noun', 'name', 'adj.', 'adv.', 'particle', 'conj.', 'interj.', 'numeral', 'article',
  'pers. pron.', 'dem. pron.', 'rel. pron.', 'indef. pron.', 'interr. pron.', 'indef. rel. pron.', 'intens. pron.',
  'refl. pron.', 'recip. pron.', 'pron.', 'poss. adj.', 'rel. adj.', 'interr. adj.', 'indef. adj.',
  'prep. (+ gen.)', 'prep. (+ dat.)', 'prep. (+ acc.)', 'adv. (+ gen.)', 'adv. (+ dat.)', 'adv. (comp.)', 'adv. (superl.)',
  'interr. adv.', 'rel. adv.', 'particle (+ acc.)',
]);
export const MORPH = new Set([
  'sg.', 'pl.', 'du.', 'nom.', 'gen.', 'dat.', 'acc.', 'voc.', 'masc.', 'fem.', 'neut.',
  'pres.', 'impf.', 'fut.', 'aor.', 'pf.', 'plpf.', 'ind.', 'subj.', 'opt.', 'imper.', 'inf.', 'part.',
  'act.', 'mid.', 'pass.', 'mid./pass.', '1', '2', '3', 'comp.', 'superl.', '(comp.)', '(superl.)',
  'indecl.', '(indecl.)', '(impers.)', 'directional', 'suffix', 'instr.',
]);
const CASES = new Set(['nom.', 'gen.', 'dat.', 'acc.', 'voc.']);
const TENSES = new Set(['pres.', 'impf.', 'fut.', 'aor.', 'pf.', 'plpf.']);

const args = process.argv.slice(2);
const cmd = args[0];
const { works } = loadLibrary();
const workOf = id => works.find(w => w.id === (id ?? 'homer.iliad')) ?? fail(`Unknown work ${id}`);
function fail(msg) { console.error(msg); process.exit(1); }
const greekLines = (work, book) => work.texts.get(book)?.editions.grc ?? fail(`${work.id} has no Greek for book ${book}`);
/** A line key ("1354a1", "135401", "12") → the line's number in the build, or null. */
const lineCode = work => { const parse = lineParser(work); return k => parse(k) ?? (/^\d+$/.test(String(k).trim()) ? Number(k) : null); };
/** A line's number → its key in the work's files. */
const lineLabel = work => work.citation?.scheme === 'bekker' ? bekkerLabel : String;

/** Check one part against the text. Returns { errors, warnings, lines }. */
export function checkPart(part, grc, known = new Map(), code = Number) {
  const errors = [], warnings = [];
  for (const [n, row] of Object.entries(part)) {
    const line = grc.get(code(n));
    if (line === undefined) { errors.push(`${n}: no such line`); continue; }
    const tokens = tokenize(line);
    if (!Array.isArray(row) || row.length !== tokens.length) { errors.push(`${n}: ${row?.length ?? 0} analyses for ${tokens.length} tokens`); continue; }
    row.forEach((a, k) => {
      const at = `${n}.${k + 1} ${tokens[k].word}`;
      if (a.w !== tokens[k].word) errors.push(`${at}: token is "${a.w}"`);
      for (const f of ['l', 'g', 'p']) if (!a[f] || typeof a[f] !== 'string' || !a[f].trim()) errors.push(`${at}: missing "${f}"`);
      if (!a.p) return;
      const [pos, morph = ''] = a.p.split(' · ');
      if (!POS.has(pos)) warnings.push(`${at}: unusual part of speech "${pos}"`);
      const terms = morph.split(/\s+/).filter(Boolean);
      for (const m of terms) if (!MORPH.has(m)) warnings.push(`${at}: unusual parse term "${m}"`);
      // Each term can be valid while the whole is not ("verb · acc. pl. masc. nom. sg. masc.").
      if (terms.filter(m => CASES.has(m)).length > 1) warnings.push(`${at}: more than one case in "${a.p}"`);
      if (pos === 'verb' && !terms.some(m => TENSES.has(m))) warnings.push(`${at}: verb without a tense in "${a.p}"`);
      const seen = known.get(normalize(a.w));
      if (seen && a.l && !seen.has(a.l) && /^(noun|name|verb|adj\.)/.test(pos)) warnings.push(`${at}: lemma ${a.l}; elsewhere ${[...seen].join(' / ')}`);
    });
  }
  return { errors, warnings, lines: Object.keys(part).length };
}

/** Lemmas already used for each normalized word form, across every analyzed book of the work. */
function knownForms(work, skipBook) {
  const known = new Map();
  for (const [book, t] of work.texts) {
    if (book === skipBook || !t.lexicon) continue;
    for (const row of Object.values(t.lexicon)) for (const a of row) {
      const k = normalize(a.w);
      if (!known.has(k)) known.set(k, new Set());
      known.get(k).add(a.l);
    }
  }
  return known;
}

if (cmd === 'skeleton') {
  const [, book, from, to, workId] = args;
  const work = workOf(workId), code = lineCode(work), label = lineLabel(work);
  const grc = greekLines(work, Number(book));
  const [a, b] = [code(from), code(to)];
  if (a === null || b === null) fail(`Not a line of ${work.id}: ${a === null ? from : to}`);
  const out = {};
  for (const n of [...grc.keys()].filter(n => n >= a && n <= b).sort((x, y) => x - y)) {
    out[label(n)] = tokenize(grc.get(n)).map(t => ({ w: t.word }));
  }
  // One line per verse keeps the file easy to read and to edit.
  console.log('{\n' + Object.entries(out).map(([n, row]) => `  "${n}": ${JSON.stringify(row)}`).join(',\n') + '\n}');
} else if (cmd === 'check') {
  const [, file, book, workId] = args;
  const work = workOf(workId);
  const part = JSON.parse(fs.readFileSync(file, 'utf8'));
  const { errors, warnings, lines } = checkPart(part, greekLines(work, Number(book)), knownForms(work, Number(book)), lineCode(work));
  for (const w of warnings) console.log(`  ! ${w}`);
  for (const e of errors) console.log(`  ✗ ${e}`);
  console.log(`${file}: ${lines} lines, ${errors.length} errors, ${warnings.length} warnings`);
  process.exit(errors.length ? 1 : 0);
} else if (cmd === 'merge') {
  let workId, book;
  const files = [];
  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--work') workId = args[++i];
    else if (book === undefined) book = Number(args[i]);
    else files.push(args[i]);
  }
  const work = workOf(workId), code = lineCode(work), label = lineLabel(work);
  const grc = greekLines(work, book);
  const merged = new Map();
  for (const file of files) {
    const part = JSON.parse(fs.readFileSync(file, 'utf8'));
    const { errors } = checkPart(part, grc, new Map(), code);
    if (errors.length) fail(`${file}: ${errors.length} errors; run check first`);
    for (const [k, row] of Object.entries(part)) {
      const n = code(k);
      if (merged.has(n)) fail(`Line ${label(n)} appears in more than one part`);
      merged.set(n, row);
    }
  }
  const missing = [...grc.keys()].filter(n => !merged.has(n)).map(label);
  if (missing.length) fail(`Lines without analyses: ${missing.slice(0, 20).join(', ')}${missing.length > 20 ? '…' : ''}`);
  const ordered = [...grc.keys()].sort((a, b) => a - b).map(n => `  "${label(n)}": ${JSON.stringify(merged.get(n))}`);
  const target = path.join(work.dir, bookFile(work.lexicon, book));
  fs.writeFileSync(target, '{\n' + ordered.join(',\n') + '\n}\n');
  console.log(`Wrote ${path.relative(process.cwd(), target)}: ${ordered.length} lines`);
} else if (cmd === 'lemmas') {
  const work = workOf(args[1]);
  const lemmas = new Map();
  for (const t of work.texts.values()) if (t.lexicon) for (const row of Object.values(t.lexicon)) for (const a of row) {
    const k = a.l;
    if (!lemmas.has(k)) lemmas.set(k, { g: new Map(), p: new Map(), n: 0 });
    const e = lemmas.get(k);
    e.n++;
    e.g.set(a.g, (e.g.get(a.g) ?? 0) + 1);
    const pos = a.p.split(' · ')[0];
    e.p.set(pos, (e.p.get(pos) ?? 0) + 1);
  }
  const top = m => [...m].sort((a, b) => b[1] - a[1])[0][0];
  for (const [l, e] of [...lemmas].sort((a, b) => a[0].localeCompare(b[0], 'el'))) console.log(`${l}\t${top(e.g)}\t${top(e.p)}\t${e.n}`);
} else {
  console.log(fs.readFileSync(new URL(import.meta.url), 'utf8').split('\n').slice(1, 9).map(l => l.replace(/^\/\/ ?/, '')).join('\n'));
}
