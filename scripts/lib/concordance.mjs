// The concordance: finds index entries in the Greek (by form patterns) and in the English
// (by name forms), line by line. Patterns come from each entry's `grc` list:
//   Ἀχιλῆος        one word, compared without accents or breathings
//   Ἀχιλλ*         a stem: any word beginning with these letters
//   πόδας ὠκὺς     a phrase of consecutive words
//   =ἦ             accent-sensitive comparison (rarely needed)
import { normalize } from './greek.mjs';

export function compilePatterns(forms = []) {
  return forms.map(source => {
    const parts = String(source).trim().split(/\s+/).map(p => {
      const exact = p.startsWith('=');
      const raw = exact ? p.slice(1) : p;
      const prefix = raw.endsWith('*');
      const text = prefix ? raw.slice(0, -1) : raw;
      return { exact, prefix, text: exact ? text.normalize('NFC').toLowerCase() : normalize(text) };
    });
    return { source: String(source), parts };
  });
}

function partMatches(part, token) {
  const value = part.exact ? token.word.normalize('NFC').toLowerCase() : token.norm;
  return part.prefix ? value.startsWith(part.text) : value === part.text;
}

/** Return [{start, end, pattern}] token-index spans (end exclusive). */
export function matchTokens(tokens, patterns) {
  const hits = [];
  for (const pattern of patterns) {
    const n = pattern.parts.length;
    for (let i = 0; i + n <= tokens.length; i++) {
      let ok = true;
      for (let k = 0; k < n && ok; k++) ok = partMatches(pattern.parts[k], tokens[i + k]);
      if (ok) hits.push({ start: i, end: i + n, pattern });
    }
  }
  return hits;
}

const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Compile English name forms into regular expressions with word boundaries. */
export function compileEnglish(forms = []) {
  return forms.filter(Boolean).map(form => {
    const f = String(form);
    const caseSensitive = /^\p{Lu}/u.test(f);
    const body = escapeRe(f).replace(/'/g, "['\u2019]");
    return { form: f, re: new RegExp(`(?<![\\p{L}\\p{N}])${body}(?![\\p{L}\\p{N}])`, caseSensitive ? 'gu' : 'giu') };
  });
}

export function findEnglish(text, compiled) {
  const spans = [];
  for (const { form, re } of compiled) {
    re.lastIndex = 0;
    for (const m of text.matchAll(re)) spans.push({ start: m.index, end: m.index + m[0].length, form });
  }
  return spans;
}

/** Keep the longest non-overlapping spans; ties go to the earlier candidate (callers sort by priority). */
export function resolveOverlaps(spans) {
  const sorted = [...spans].sort((a, b) => (b.end - b.start) - (a.end - a.start) || (a.priority ?? 0) - (b.priority ?? 0) || a.start - b.start);
  const taken = [];
  for (const s of sorted) if (!taken.some(t => s.start < t.end && t.start < s.end)) taken.push(s);
  return taken.sort((a, b) => a.start - b.start);
}
