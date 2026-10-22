// Content integrity: the whole library builds cleanly and stays internally consistent.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { build } from '../scripts/build.mjs';
import { loadLibrary } from '../scripts/lib/content.mjs';
import { lineLabel } from '../scripts/lib/refs.mjs';

const result = build({ write: false, log: () => {} });

test('the build has no errors', () => {
  assert.deepEqual(result.errors, []);
});

test('every capitalized Greek word is indexed', () => {
  assert.deepEqual(result.report.unindexedNames, []);
});

test('every [[link]] points to an entry', () => {
  assert.deepEqual(result.report.missingLinks, []);
});

test('every Greek line has a translation', () => {
  for (const w of loadLibrary().works) for (const [book, t] of w.texts) {
    for (const n of t.editions.grc.keys()) assert.ok(t.editions.en?.get(n), `${w.id} ${book}.${n} has no English`);
  }
});

test('every quote in the registry resolves to real lines', () => {
  assert.ok(result.registry.size > 0);
  assert.deepEqual(result.errors.filter(e => /quote/i.test(e)), []);
});

test('speeches in the structure files match the quotation marks of the Greek', () => {
  for (const w of loadLibrary().works) for (const [book, t] of w.texts) {
    if (w.display === 'prose') continue;
    const grc = t.editions.grc;
    const starts = new Set((t.structure.speeches ?? []).map(s => s.from));
    for (const s of t.structure.speeches ?? []) {
      // A speech opens a verse, except where the text itself turns to direct speech inside one ("midline": true, 23.855).
      const open = grc.get(s.from) ?? '';
      assert.ok(open.trimStart().startsWith('“') || (s.midline === true && open.includes('“')), `${w.id} ${book}.${s.from}: speech does not open with “`);
      assert.ok(grc.get(s.to)?.includes('”'), `${w.id} ${book}.${s.to}: speech does not close with ”`);
    }
    for (const [n, line] of grc) if (line.includes('“')) assert.ok(starts.has(n), `${w.id} ${book}.${n}: a speech opens here but is not in the structure file`);
  }
});

test('quotations in prose structure files match the quotation marks of the Greek', () => {
  for (const w of loadLibrary().works) for (const [book, t] of w.texts) {
    if (w.display !== 'prose') continue;
    const grc = t.editions.grc, label = n => lineLabel(w.citation?.scheme, book, n);
    const quotes = t.structure.quotations ?? [];
    // Every quotation mark opens a quotation in the structure file, on its own line or one shared with another.
    // An indirect quotation, which the text gives without quotation marks, is listed with "marks": 0.
    const opened = [...grc].reduce((s, [n, line]) => s + (line.match(/“/g) ?? []).length, 0);
    const listed = quotes.reduce((s, q) => s + (q.marks ?? 1), 0);
    for (const q of quotes) {
      if (q.marks === 0) continue;
      assert.ok(grc.get(q.from)?.includes('“'), `${w.id} ${label(q.from)}: quotation does not open with “`);
      assert.ok(grc.get(q.to)?.includes('”'), `${w.id} ${label(q.to)}: quotation does not close with ”`);
    }
    assert.equal(listed, opened, `${w.id} ${book}: ${opened} quotation marks open in the Greek, ${listed} quotations in the structure file`);
  }
});

test('scenes cover every line exactly once, in order', () => {
  for (const w of loadLibrary().works) for (const [book, t] of w.texts) {
    const scenes = t.structure.scenes ?? [];
    if (!scenes.length) continue;
    const lines = [...t.editions.grc.keys()].sort((a, b) => a - b);
    const at = new Map(lines.map((n, i) => [n, i]));
    assert.equal(scenes[0].from, lines[0]);
    assert.equal(scenes.at(-1).to, lines.at(-1));
    for (const s of scenes) assert.ok(at.has(s.from) && at.has(s.to) && at.get(s.from) <= at.get(s.to), `${w.id} ${book}: scene "${s.title}" does not span lines of the text`);
    for (let i = 1; i < scenes.length; i++) assert.equal(at.get(scenes[i].from), at.get(scenes[i - 1].to) + 1, `${w.id} ${book}: gap or overlap before scene ${i + 1}`);
  }
});
