// How lines are cited: "1.396" (book.line) or, for Aristotle, Bekker page, column and line ("1451a36").
// Browser twin of the Bekker functions in scripts/lib/refs.mjs: a Bekker line is coded as one integer,
// page × 100, plus 50 in column b, plus the line (1447a8 → 144708, 1447b8 → 144758).

/** 144708 → "1447a8". */
export function bekkerLabel(n) {
  const page = Math.floor(n / 100), rest = n % 100;
  return rest >= 50 ? `${page}b${rest - 50}` : `${page}a${rest}`;
}

/** "1447a8" → 144708; anything else → null. */
export function parseBekker(s) {
  const m = String(s).trim().match(/^(\d{4})([ab])(\d{1,2})$/);
  return m ? +m[1] * 100 + (m[2] === 'b' ? 50 : 0) + +m[3] : null;
}

export const isBekker = work => work?.citation?.scheme === 'bekker';
export const isProse = work => work?.display === 'prose';

/** What the work calls a book: "Book", or "Chapter" for the Poetics. */
export const bookWord = work => work?.citation?.book ?? 'Book';

/** One line as cited, without the work: "1.396", "1451a36". */
export const lineLabel = (work, book, n) => isBekker(work) ? bekkerLabel(n) : `${book}.${n}`;

/** The second line of a Bekker range, as short as it can be: "38", "b5", "1452a5". */
function bekkerTail(from, to) {
  const b = bekkerLabel(to);
  if (Math.floor(from / 100) !== Math.floor(to / 100)) return b;
  if ((from % 100 >= 50) !== (to % 100 >= 50)) return b.slice(4);
  return b.slice(5);
}

/** A range as cited: "1.396–406", "1451a36–b5". */
export function rangeLabel(work, book, from, to = from, dash = '–') {
  if (isBekker(work)) return to !== from ? `${bekkerLabel(from)}${dash}${bekkerTail(from, to)}` : bekkerLabel(from);
  return to !== from ? `${book}.${from}${dash}${to}` : `${book}.${from}`;
}

/** The reference the quote registry stores: "1.396-406", "1451a36-b5". */
export const refOf = (work, book, from, to = from) => rangeLabel(work, book, from, to, '-');

/**
 * The number on a line's button in the reader: the verse number, or for a Bekker line its number in the
 * column, with page and column where a column begins ("1447b8", then "9", "10"…).
 */
export function lineButton(work, n, first = false) {
  if (!isBekker(work)) return String(n);
  const line = n % 50;
  return first || line === 1 ? bekkerLabel(n) : String(line);
}

/** Is this line's number shown when only every fifth is (the first line of a book or column too)? */
export function lineMarked(work, n, first = false) {
  if (!isBekker(work)) return n % 5 === 0 || n === 1;
  return first || n % 5 === 0 || n % 50 === 1;
}

/** Parse what a reader types in "Go to line": "396", or "1451a36" or just "36" in a Bekker work. */
export function parseLineInput(work, s, lines) {
  const v = String(s).trim();
  if (!isBekker(work)) return /^\d+$/.test(v) ? +v : null;
  const full = parseBekker(v);
  if (full !== null) return full;
  if (/^\d{1,2}$/.test(v)) return lines.find(n => n % 50 === +v) ?? null;
  const col = v.match(/^([ab])(\d{1,2})$/);
  if (col) return lines.find(n => (n % 100 >= 50 ? 'b' : 'a') === col[1] && n % 50 === +col[2]) ?? null;
  return null;
}
