import { el, esc, icon, on, plural, kindIcon } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { enhanceArticle } from '../ui/components.js';
import { entryRow } from './index.js';

/** Wrap character ranges of `text` in <mark>. */
export function mark(text, ranges = []) {
  if (!ranges.length) return esc(text);
  const sorted = [...ranges].sort((a, b) => a[0] - b[0]);
  let out = '', i = 0;
  for (const [s, e] of sorted) {
    if (s < i) continue;
    out += esc(text.slice(i, s)) + `<mark>${esc(text.slice(s, e))}</mark>`;
    i = e;
  }
  return out + esc(text.slice(i));
}

const REL_LABEL = r => r.replace(/^./, c => c.toUpperCase());

/** Previous and next story in mythic time: by period, then order within it, then place in the text. */
function storyNav(cat, e) {
  const periodIndex = new Map(cat.periods.map((p, i) => [p.id, i]));
  const stories = cat.entries.filter(x => x.kind === 'story').sort((a, b) =>
    (periodIndex.get(a.period) ?? 99) - (periodIndex.get(b.period) ?? 99) || (a.order ?? 999) - (b.order ?? 999) || a.firstKey.localeCompare(b.firstKey));
  const i = stories.findIndex(x => x.id === e.id);
  const row = (x, label) => x ? `<a class="row" href="#/entry/${esc(x.id)}"><span class="row-main"><span class="row-sub one" style="font-size:12px;color:var(--text-3)">${label} · ${esc(cat.by.periods.get(x.period)?.label ?? '')}</span><span class="row-title"><span>${esc(x.title)}</span></span></span>${icon('chevron', 'chev')}</a>` : '';
  const prev = row(stories[i - 1], 'Earlier in mythic time'), next = row(stories[i + 1], 'Later in mythic time');
  return prev || next ? `<section class="section"><div class="section-head"><h2 class="section-title">In mythic time</h2><a class="section-link" href="#/myths?p=${esc(e.period)}">Timeline</a></div><div class="list">${prev}${next}</div></section>` : '';
}
const OCC_PAGE = 12;

export async function render(route) {
  const id = route.parts[0];
  const [cat, e] = await Promise.all([store.catalog(), store.entry(id)]);
  const kind = cat.by.kinds.get(e.kind);
  const tags = e.tags.map(t => cat.by.tags.get(t)).filter(Boolean);
  const period = e.period ? cat.by.periods.get(e.period) : null;
  const mode = e.mode ? cat.by.modes.get(e.mode) : null;
  const ent = x => cat.by.entries.get(x);
  const link = x => ent(x) ? `<a class="wl" href="#/entry/${esc(x)}">${esc(ent(x).title)}</a>` : esc(x);
  const work = id => cat.by.works.get(id);
  const h2s = e.headings.filter(h => h.level === 2);

  const rowsOf = ids => ids.map(ent).filter(Boolean).map(x => entryRow(x, cat, { meta: 'none' })).join('');
  const section = (title, inner, extra = '') => inner ? `<section class="section"><div class="section-head"><h2 class="section-title">${title}</h2>${extra}</div>${inner}</section>` : '';

  // Relations grouped by kind of relation.
  const relGroups = new Map();
  for (const r of e.relations) {
    if (!relGroups.has(r.rel)) relGroups.set(r.rel, []);
    relGroups.get(r.rel).push(r);
  }
  const relations = [...relGroups].map(([rel, list]) => list.map((r, i) => {
    const t = ent(r.id);
    return `<a class="row" href="#/entry/${esc(r.id)}"><span class="row-main"><span class="row-sub one" style="font-size:12.5px;color:var(--text-3)">${i === 0 ? esc(REL_LABEL(rel)) : '&nbsp;'}</span>
      <span class="row-title"><span>${esc(t?.title ?? r.id)}</span>${t?.greek ? `<span class="row-greek">${esc(t.greek)}</span>` : ''}</span></span>
      ${r.refs?.length ? `<span class="row-meta" style="font-size:13px">${esc(r.refs.join(', '))}</span>` : ''}${icon('chevron', 'chev')}</a>`;
  }).join('')).join('');

  const speeches = e.speeches.map(s => {
    const w = work(s.work);
    return `<a class="row speech-row" href="#/read/${s.work}/${s.book}?l=${s.from}-${s.to}"><span class="row-main">
      <span class="row-title"><span>To ${s.to_whom.map(x => esc(ent(x)?.title ?? x)).join(', ')}</span></span>
      <span class="row-sub one">${esc(w?.citation.abbr ?? '')} ${s.book}.${s.from}–${s.to} · ${plural(s.to - s.from + 1, 'line')}${s.kind ? ` · ${esc(s.kind)}` : ''}</span></span>${icon('chevron', 'chev')}</a>`;
  }).join('');

  const passages = (e.passages ?? []).map(p => `<a class="row" href="${esc(p.href)}"><span class="row-main"><span class="row-title"><span>${esc(p.label || p.short)}</span></span>${p.label ? `<span class="row-sub one">${esc(p.short)}</span>` : ''}</span>${icon('chevron', 'chev')}</a>`).join('');

  const occRow = o => {
    const w = work(o.work);
    const via = o.via === 'ref' ? '<span class="via">by reference</span>' : o.via === 'en' ? '<span class="via">in translation</span>' : '';
    return `<a class="occ" href="#/read/${o.work}/${o.book}?l=${o.n}"><span class="on">${esc(w?.citation.abbr ?? '')} ${o.book}.${o.n}${via}${o.forms?.length ? `<span style="font-weight:500;color:var(--text-2);font-family:var(--greek);letter-spacing:0;font-size:13px">${esc(o.forms.join(', '))}</span>` : ''}</span>
      <span class="g" lang="grc">${mark(o.grc, o.hg)}</span><span class="e">${mark(o.en, o.he)}</span></a>`;
  };
  const occ = e.occurrences;
  const byBook = new Map();
  for (const o of occ) { const k = `${o.work} ${o.book}`; if (!byBook.has(k)) byBook.set(k, []); byBook.get(k).push(o); }

  const storyMeta = e.kind === 'story' ? `<div class="entry-stats" style="gap:10px;align-items:center">
      ${period ? `<a class="period-badge" href="#/myths?p=${period.id}">${icon('amphora')}<span>${esc(period.label)}</span><span class="grc">${esc(period.greek)}</span></a>` : ''}
      ${mode ? `<span class="mode-pill ${mode.id}">${esc(mode.label)}</span>` : ''}
      ${e.narrator ? `<span>Told by ${link(e.narrator)}</span>` : ''}</div>` : '';

  const ofLine = e.of?.length && e.kind !== 'story'
    ? `<div class="entry-stats"><span>${e.kind === 'epithet' ? 'Epithet of' : 'About'} ${e.of.map(link).join(', ')}</span></div>` : '';

  const stats = [
    e.stats.lines ? `<span><b>${e.stats.lines}</b> ${e.stats.lines === 1 ? 'line' : 'lines'}</span>` : '',
    e.stats.mentions && e.stats.mentions !== e.stats.lines ? `<span><b>${e.stats.mentions}</b> named in Greek</span>` : '',
    e.stats.speeches ? `<span>speaks <b>${e.stats.spoken}</b> lines in <b>${e.stats.speeches}</b> ${e.stats.speeches === 1 ? 'speech' : 'speeches'}</span>` : '',
    e.first ? `<span>first at <a href="#/read/homer.iliad/${e.first.split('.')[0]}?l=${e.first.split('.')[1]}"><b>${esc(e.first)}</b></a></span>` : '',
  ].filter(Boolean).join('');

  const view = el(`<div class="view">
    <header class="entry-head">
      <div class="chips wrap">
        <a class="chip kind" href="#/index?k=${esc(e.kind)}" style="--h:${kind?.hue ?? 262}">${icon(kindIcon(kind?.icon))}${esc(kind?.one ?? e.kind)}</a>
        ${tags.map(t => `<a class="chip tag" href="#/tags/${esc(t.id)}">#${esc(t.label.toLowerCase())}</a>`).join('')}
      </div>
      <h1 class="large-title" data-title-anchor>${esc(e.title)}</h1>
      ${e.greek ? `<div class="entry-greek"><span class="grc" lang="grc">${esc(e.greek)}</span>${e.translit ? `<span class="rom">${esc(e.translit)}</span>` : ''}</div>` : ''}
      ${storyMeta}${ofLine}
      ${e.summaryHtml ? `<p class="lead article" style="font-size:18px">${e.summaryHtml}</p>` : ''}
      ${stats ? `<div class="entry-stats">${stats}</div>` : ''}
      ${e.source ? `<div class="entry-stats"><span>Source: <b>${esc(e.source)}</b></span></div>` : ''}
      ${h2s.length >= 3 ? `<nav class="toc" aria-label="On this page">${h2s.map(h => `<a class="chip" href="#/entry/${esc(id)}?s=${esc(h.id)}" data-s="${esc(h.id)}">${esc(h.text)}</a>`).join('')}</nav>` : ''}
    </header>

    ${e.html ? `<div class="article">${e.html}</div>` : ''}

    ${e.participants?.length ? section('In this story', `<div class="list">${rowsOf(e.participants)}</div>`) : ''}
    ${section('Key passages', passages ? `<div class="list">${passages}</div>` : '')}
    ${section('Family & relations', relations ? `<div class="list">${relations}</div>` : '')}
    ${section('Epithets', e.epithets.length ? `<div class="list">${rowsOf(e.epithets)}</div>` : '')}
    ${section('Stories', e.stories.length ? `<div class="list">${rowsOf(e.stories)}</div>` : '')}
    ${section('Speeches', speeches ? `<div class="list">${speeches}</div>` : '')}
    ${section('Anecdotes & notes', e.anecdotes.length ? `<div class="list">${rowsOf(e.anecdotes)}</div>` : '')}
    ${occ.length ? `<section class="section" id="occurrences"><div class="section-head"><h2 class="section-title">Occurrences</h2><span class="muted num" style="font-size:15px">${occ.length}</span></div>
      ${[...byBook].map(([k, list]) => {
        const [wid, b] = k.split(' ');
        return `<div class="section-title small" style="margin:0 4px 8px">${esc(work(wid)?.title ?? wid)} ${b}</div>
          <div class="list occ-list" data-total="${list.length}">${list.slice(0, OCC_PAGE).map(occRow).join('')}
          ${list.length > OCC_PAGE ? `<button class="more-btn" type="button" data-more="${esc(k)}">Show all ${list.length}</button>` : ''}</div>`;
      }).join('')}</section>` : ''}
    ${section('Mentioned in', e.backlinks.length ? `<div class="list">${rowsOf(e.backlinks)}</div>` : '')}
    ${e.kind === 'story' ? storyNav(cat, e) : ''}
  </div>`);

  enhanceArticle(view, e);
  on(view, 'click', '[data-more]', (ev, b) => {
    const list = byBook.get(b.dataset.more);
    b.parentElement.innerHTML = list.map(occRow).join('');
  });
  on(view, 'click', '.toc [data-s]', (ev, a) => {
    ev.preventDefault();
    scrollToSection(a.dataset.s);
  });
  function scrollToSection(s) {
    const h = view.querySelector(`#${CSS.escape(s)}`);
    if (h) window.scrollTo({ top: h.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
  }

  return {
    title: e.title,
    el: view,
    mount: ({ restore }) => {
      if (restore !== undefined) window.scrollTo(0, restore);
      else if (route.query.s) requestAnimationFrame(() => scrollToSection(route.query.s));
      else window.scrollTo(0, 0);
    },
  };
}
