// Citation references: "1.396-406", "Il. 1.5", "iliad 1.396–1.406", "homer.iliad 2.1" (book.line), and
// Bekker references for Aristotle: "Poetics 1451a36-38", "Poet. 1451a36–b5", "poetics 1451b5".
// A reference is normalized to { work, book, from, toBook, to } and printed canonically as
// "homer.iliad 1.396-406" or "aristotle.poetics 1451a36-b5" (the form stored in the quote registry).
//
// A Bekker line is coded as one integer, page × 100, plus 50 in column b, plus the line: 1447a8 → 144708,
// 1447b8 → 144758. The codes sort in the order of the text, and every fifth line is a multiple of five,
// so the verse machinery (line maps, numeric ranges, "every fifth line") works on prose unchanged. The
// book of a Bekker reference is the chapter its first line falls in (the work's `books.N.from`).

export class RefError extends Error {}

// ── Bekker lines ────────────────────────────────────────────────────────────
export const bekkerCode = (page, column, line) => page * 100 + (column === 'b' ? 50 : 0) + line;

/** 144708 → "1447a8". */
export function bekkerLabel(n) {
  const page = Math.floor(n / 100), rest = n % 100;
  return rest >= 50 ? `${page}b${rest - 50}` : `${page}a${rest}`;
}

/** "1447a8" → 144708; anything else → null. */
export function parseBekker(s) {
  const m = String(s).trim().match(/^(\d{4})([ab])(\d{1,2})$/);
  return m ? bekkerCode(+m[1], m[2], +m[3]) : null;
}

/** The shortest label of the second line of a range: "38" (same column), "b5" (same page), "1452a5". */
function bekkerTail(from, to) {
  const a = bekkerLabel(from), b = bekkerLabel(to);
  if (Math.floor(from / 100) !== Math.floor(to / 100)) return b;
  if ((from % 100 >= 50) !== (to % 100 >= 50)) return b.slice(4);
  return b.slice(5);
}

// ── Works ───────────────────────────────────────────────────────────────────
/**
 * name → work id, by id, title or alias. The resolver also knows each work's citation scheme and, for
 * Bekker works, the chapter a line falls in: resolve.scheme(id), resolve.bookOf(id, n).
 */
export function makeWorkResolver(works) {
  const aliases = new Map(), byId = new Map();
  for (const w of works) {
    byId.set(w.id, w);
    aliases.set(w.id.toLowerCase(), w.id);
    aliases.set(w.title.toLowerCase(), w.id);
    for (const a of w.aliases ?? []) aliases.set(a.toLowerCase(), w.id);
  }
  const starts = new Map(); // work id → [[first line, book]], ascending
  for (const w of works) {
    if (w.citation?.scheme !== 'bekker') continue;
    starts.set(w.id, Object.entries(w.books ?? {}).map(([b, meta]) => [parseBekker(meta.from), +b])
      .filter(([n]) => n !== null).sort((a, b) => a[0] - b[0]));
  }
  const resolve = name => aliases.get(String(name).toLowerCase().replace(/\s+/g, ' ').trim());
  resolve.scheme = id => byId.get(id)?.citation?.scheme ?? 'book.line';
  resolve.bookOf = (id, n) => {
    let book = null;
    for (const [first, b] of starts.get(id) ?? []) if (first <= n) book = b;
    return book;
  };
  return resolve;
}

const RANGE = /^(\d+)\.(\d+)(?:\s*[-–—]\s*(?:(\d+)\.)?(\d+))?$/;
const BEKKER = /^(\d{4})([ab])(\d{1,2})(?:\s*[-–—]\s*(?:(\d{4})?([ab]))?(\d{1,2}))?$/;

/** Parse a reference; `defaultWork` is used when the string names no work. */
export function parseRef(input, resolveWork, defaultWork) {
  const text = String(input).trim();
  const bk = text.match(/^(.*?)\s*(\d{4}[ab]\d{1,2}(?:\s*[-–—]\s*(?:(?:\d{4})?[ab])?\d{1,2})?)$/);
  if (bk) return parseBekkerRef(input, bk[1], bk[2], resolveWork, defaultWork);
  const m = text.match(/^(.*?)\s*(\d+\.\d+(?:\s*[-–—]\s*(?:\d+\.)?\d+)?)$/);
  if (!m) throw new RefError(`Not a reference: "${input}"`);
  const [, workPart, range] = m;
  const work = workPart ? resolveWork(workPart.replace(/,$/, '')) : defaultWork;
  if (!work) throw new RefError(`Unknown work in reference: "${input}"`);
  if (resolveWork.scheme?.(work) === 'bekker') throw new RefError(`${work} is cited by Bekker page and line, as in 1451a36: "${input}"`);
  const r = range.replace(/\s+/g, '').match(RANGE);
  const book = +r[1], from = +r[2];
  const toBook = r[3] ? +r[3] : book;
  const to = r[4] ? +r[4] : from;
  if (toBook < book || (toBook === book && to < from)) throw new RefError(`Backwards range: "${input}"`);
  return { work, book, from, toBook, to };
}

function parseBekkerRef(input, workPart, range, resolveWork, defaultWork) {
  const work = workPart ? resolveWork(workPart.replace(/,$/, '')) : defaultWork;
  if (!work) throw new RefError(`Unknown work in reference: "${input}"`);
  if (resolveWork.scheme?.(work) !== 'bekker') throw new RefError(`${work} is not cited by Bekker lines: "${input}"`);
  const r = range.replace(/\s+/g, '').match(BEKKER);
  const from = bekkerCode(+r[1], r[2], +r[3]);
  const to = r[6] ? bekkerCode(r[4] ? +r[4] : +r[1], r[5] ?? r[2], +r[6]) : from;
  if (to < from) throw new RefError(`Backwards range: "${input}"`);
  const book = resolveWork.bookOf(work, from), toBook = resolveWork.bookOf(work, to);
  if (book === null) throw new RefError(`No chapter of ${work} contains ${bekkerLabel(from)}: "${input}"`);
  return { work, book, from, toBook, to, scheme: 'bekker' };
}

export function formatRange(r, dash = '-') {
  if (r.scheme === 'bekker') return r.to !== r.from ? `${bekkerLabel(r.from)}${dash}${bekkerTail(r.from, r.to)}` : bekkerLabel(r.from);
  const { book, from, toBook, to } = r;
  if (toBook !== book) return `${book}.${from}${dash}${toBook}.${to}`;
  if (to !== from) return `${book}.${from}${dash}${to}`;
  return `${book}.${from}`;
}

export const canonicalRef = r => `${r.work} ${formatRange(r)}`;

/** One line, as cited: "1.396" or "1451a36". */
export const lineLabel = (scheme, book, n) => scheme === 'bekker' ? bekkerLabel(n) : `${book}.${n}`;

/**
 * Expand a reference into line keys like "1.396" ("book.n"). A verse reference must lie in one book. A
 * Bekker reference is expanded over `lines`, the work's [book, n] pairs in order, since its numbering
 * has gaps between columns; it may run across chapters.
 */
export function refLines(r, lines) {
  if (r.scheme === 'bekker') {
    if (!lines) throw new RefError(`The lines of ${r.work} are needed to expand ${canonicalRef(r)}`);
    const out = lines.filter(([, n]) => n >= r.from && n <= r.to).map(([b, n]) => `${b}.${n}`);
    if (!out.length) throw new RefError(`No lines of ${r.work} in ${canonicalRef(r)}`);
    return out;
  }
  if (r.toBook !== r.book) throw new RefError(`Cross-book ranges are not supported yet: ${canonicalRef(r)}`);
  const out = [];
  for (let n = r.from; n <= r.to; n++) out.push(`${r.book}.${n}`);
  return out;
}
