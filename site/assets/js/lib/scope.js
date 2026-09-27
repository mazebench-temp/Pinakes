// Scopes: the part of the library an article is studied at. An author ("homer"), a work ("homer.iliad"),
// or a book of a work ("homer.iliad.2"); ALL is everything. The choice is remembered as the study scope.
import * as store from './store.js';

export const ALL = 'all';

const def = (cat, id) => cat.by.scopes.get(id);

/** Is scope s the same as S or inside it? */
export function within(s, S, cat) {
  if (S === ALL || s === S) return true;
  for (let p = def(cat, s)?.parent; p; p = def(cat, p)?.parent) if (p === S) return true;
  return false;
}

export const bookScope = (work, book) => `${work}.${book}`;
export const label = (S, cat) => S === ALL ? 'All' : def(cat, S)?.label ?? S;
export const longLabel = (S, cat) => S === ALL ? 'Everything' : def(cat, S)?.long ?? def(cat, S)?.label ?? S;

/** Is a catalog entry present in scope S (it occurs there, or has a note or passage there)? */
export function presentIn(e, S, cat) {
  if (S === ALL) return true;
  return Object.keys(e.in ?? {}).some(s => within(s, S, cat)) || (e.notes ?? []).some(s => within(s, S, cat));
}

/** Lines a catalog entry occurs in within scope S. */
export function linesIn(e, S, cat) {
  if (S === ALL) return e.lines;
  let n = 0;
  for (const [s, [c]] of Object.entries(e.in ?? {})) if (within(s, S, cat)) n += c;
  return n;
}

/** Sort key of a catalog entry's first appearance within scope S. */
export function firstKeyIn(e, S, cat) {
  if (S === ALL) return e.firstKey;
  for (const [s, [, first]] of Object.entries(e.in ?? {})) {
    if (!within(s, S, cat)) continue;
    const d = def(cat, s);
    return `${d?.work ?? s} ${String(d?.book ?? 0).padStart(3, '0')}.${String(first || 99999).padStart(5, '0')}`;
  }
  return '~';
}

/**
 * The scopes worth offering for an entry, in reading order: every book it is present in, plus its works
 * or authors when it spans more than one, plus any scope it has a note for. One scope or none means the
 * article reads the same at every scope, and the scope bar is not shown.
 */
export function entryScopes(e, cat) {
  const present = new Set([...Object.keys(e.in ?? {}), ...(e.notes ?? [])]);
  const ancestors = new Set();
  for (const s of present) for (let p = def(cat, s)?.parent; p; p = def(cat, p)?.parent) ancestors.add(p);
  const works = [...ancestors].filter(s => def(cat, s)?.kind === 'work');
  const authors = [...ancestors].filter(s => def(cat, s)?.kind === 'author');
  const offer = new Set(present);
  if (works.length > 1) works.forEach(s => offer.add(s));
  if (authors.length > 1) authors.forEach(s => offer.add(s));
  return cat.scopes.map(s => s.id).filter(id => offer.has(id));
}

/** The scope to show: an explicit ?in=, else the remembered study scope, else everything. */
export function chooseScope(requested, available) {
  if (requested && (requested === ALL || available.includes(requested))) return requested;
  const pref = store.prefs.scope;
  return pref && available.includes(pref) ? pref : ALL;
}

export function remember(S) { store.setPref('scope', S); }
