// Data loading (cached), derived lookups, and per-browser preferences.

const cache = new Map();

export function getJSON(path) {
  if (!cache.has(path)) {
    const p = fetch(`data/${path}`).then(r => {
      if (!r.ok) throw new Error(`Could not load ${path} (${r.status}). Run "npm run build".`);
      return r.json();
    });
    p.catch(() => cache.delete(path));
    cache.set(path, p);
  }
  return cache.get(path);
}

let lookups = null;
export async function catalog() {
  const cat = await getJSON('catalog.json');
  if (!lookups) {
    const byId = (list, key = 'id') => new Map(list.map(x => [x[key], x]));
    const tagChildren = new Map();
    for (const t of cat.tags) if (t.parent) {
      if (!tagChildren.has(t.parent)) tagChildren.set(t.parent, []);
      tagChildren.get(t.parent).push(t.id);
    }
    lookups = {
      entries: byId(cat.entries), kinds: byId(cat.kinds), tags: byId(cat.tags), periods: byId(cat.periods),
      ages: byId(cat.ages), modes: byId(cat.modes), works: byId(cat.works), authors: byId(cat.authors),
      facets: byId(cat.facets), tagChildren,
    };
  }
  return Object.assign(cat, { by: lookups });
}

/** One entry's full page. Static exports bundle them all into data/entries.json. */
export const entry = async id => {
  if (window.PINAKES_BUNDLE) {
    const all = await getJSON('entries.json');
    if (!all[id]) throw new Error(`There is no entry called “${id}”.`);
    return all[id];
  }
  return getJSON(`entries/${encodeURIComponent(id)}.json`);
};
export const text = (work, book) => getJSON(`texts/${work}/${book}.json`);
export const quotes = () => getJSON('quotes.json');
export const report = () => getJSON('report.json');

/** Descendant tag ids including the tag itself. */
export function tagFamily(cat, id) {
  const out = [id];
  for (let i = 0; i < out.length; i++) out.push(...(cat.by.tagChildren.get(out[i]) ?? []));
  return out;
}

// ── Preferences ─────────────────────────────────────────────────────────────
const KEY = 'pinakes.prefs.v1';
const DEFAULTS = {
  mode: 'both', layout: 'stacked', size: 1.18, numbers: 'five', names: true, speakers: true,
  theme: 'system', quoteView: 'en', indexSort: 'az', mythsSort: 'time', lastRead: null, recent: [],
};

function loadPrefs() {
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
  catch { return { ...DEFAULTS }; }
}

export const prefs = loadPrefs();

export function setPref(key, value) {
  prefs[key] = value;
  try { localStorage.setItem(KEY, JSON.stringify(prefs)); } catch { /* storage unavailable */ }
}

export function applyTheme() {
  const root = document.documentElement;
  if (prefs.theme === 'light' || prefs.theme === 'dark') root.dataset.theme = prefs.theme;
  else if (root.dataset.pinakesTheme) delete root.dataset.theme;
  if (prefs.theme !== 'system') root.dataset.pinakesTheme = '1';
}
