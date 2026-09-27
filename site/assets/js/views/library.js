import { el, esc, icon, kindIcon } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { presentIn, firstKeyIn, bookScope, currentBook } from '../lib/scope.js';

export const BOOK_LETTERS = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';

export async function render() {
  const cat = await store.catalog();
  const last = store.prefs.lastRead;
  const lastWork = last && cat.by.works.get(last.work);
  const featured = cat.entries.filter(e => e.featured).sort((a, b) => (a.sort ?? 99) - (b.sort ?? 99) || a.title.localeCompare(b.title));
  const cur = currentBook(cat) ?? { work: 'homer.iliad', book: 1 };
  const curScope = bookScope(cur.work, cur.book);
  const stories = cat.entries.filter(e => e.kind === 'story' && presentIn(e, curScope, cat))
    .sort((a, b) => firstKeyIn(a, curScope, cat).localeCompare(firstKeyIn(b, curScope, cat)));

  const workCard = w => {
    const author = cat.by.authors.get(w.author);
    return `<article class="work-card">
      <div class="work-head">
        <div class="book-letter" aria-hidden="true">${esc(w.greek[0])}</div>
        <div style="min-width:0;flex:1">
          <div style="display:flex;gap:10px;align-items:baseline;flex-wrap:wrap"><h3 class="work-title">${esc(w.title)}</h3><span class="work-greek">${esc(w.greek)}</span></div>
          <div class="muted" style="font-size:14px">${esc(author?.name ?? '')} · ${esc(w.genre)} · ${esc(w.meter)}</div>
          <p style="margin:8px 0 0;font-size:15px;line-height:1.45">${esc(w.summary)}</p>
        </div>
      </div>
      <div class="book-grid" role="list" aria-label="Books of the ${esc(w.title)}">
        ${Array.from({ length: w.bookCount }, (_, i) => {
          const b = i + 1, ok = w.available.includes(b), meta = w.books[b];
          return ok
            ? `<a role="listitem" class="book-tile available" href="#/read/${w.id}/${b}" title="Book ${b}${meta?.title ? `: ${esc(meta.title)}` : ''}">${BOOK_LETTERS[i]}<span class="bn">${b}</span></a>`
            : `<span role="listitem" class="book-tile" title="Book ${b}: not yet translated">${BOOK_LETTERS[i]}<span class="bn">${b}</span></span>`;
        }).join('')}
      </div>
      <div class="btn-row">
        <a class="btn" href="#/read/${w.id}/${w.available[0]}">${icon('book')}Read Book ${w.available[0]}</a>
        <a class="btn secondary" href="#/book/${w.id}/${w.available.at(-1)}">Book ${w.available.at(-1)} at a glance</a>
        <a class="btn plain" href="#/work/${w.id}">About the ${esc(w.title)}</a>
      </div>
    </article>`;
  };

  const view = el(`<div class="view">
    <header class="page-head hero">
      <div class="hero-mark">Πίνακες</div>
      <h1 class="large-title" data-title-anchor>Library</h1>
      <p class="page-sub">A reader and index of Greek literature, named after the Pinakes of Callimachus, the catalogue of the Library of Alexandria. It begins with the wrath of Achilles.</p>
    </header>

    ${lastWork ? `<a class="continue" href="#/read/${last.work}/${last.book}?l=${last.n}">
      <div class="book-letter" style="width:44px;height:54px;font-size:26px">${BOOK_LETTERS[last.book - 1]}</div>
      <div class="row-main"><span class="eyebrow">Continue reading</span><span style="font-weight:600;font-size:17px">${esc(lastWork.title)} ${last.book}.${last.n}</span>${last.scene ? `<span class="row-sub one">${esc(last.scene)}</span>` : ''}</div>
      ${icon('chevron', 'chev')}</a>` : ''}

    ${cat.authors.map(a => `<section class="section">
      <div class="section-head"><h2 class="section-title">${esc(a.name)} <span class="grc" style="font-weight:400;color:var(--text-2);font-family:var(--greek-display)">${esc(a.greek)}</span></h2>
        ${cat.by.entries.has(a.entry) ? `<a class="section-link" href="#/entry/${a.entry}">About</a>` : ''}</div>
      <div style="display:flex;flex-direction:column;gap:12px">${a.works.map(id => workCard(cat.by.works.get(id))).join('')}</div>
    </section>`).join('')}

    <section class="section">
      <div class="section-head"><h2 class="section-title">The Index</h2><a class="section-link" href="#/index">See all</a></div>
      <div class="stat-grid">
        <a class="stat" href="#/book/${esc(cur.work)}/${cur.book}"><b>${cat.stats.lines.toLocaleString()}</b><span>lines, Greek and English</span></a>
        <a class="stat" href="#/index"><b>${cat.stats.entries.toLocaleString()}</b><span>index entries</span></a>
        <a class="stat" href="#/myths"><b>${cat.stats.stories}</b><span>stories and myths</span></a>
        <a class="stat" href="#/tags"><b>${cat.tags.filter(t => t.count).length}</b><span>tags in use</span></a>
        <a class="stat" href="#/vocab/${esc(cur.work)}/${cur.book}"><b>${cat.stats.lemmas.toLocaleString()}</b><span>Greek words, glossed</span></a>
        <a class="stat" href="#/quotes"><b>${(cat.stats.passages ?? cat.stats.quotes).toLocaleString()}</b><span>passages quoted</span></a>
      </div>
    </section>

    ${featured.length ? `<section class="section">
      <div class="section-head"><h2 class="section-title">Begin with</h2></div>
      <div class="feature-grid">${featured.map(e => {
        const k = cat.by.kinds.get(e.kind);
        return `<a class="feature" href="#/entry/${e.id}" style="--h:${k?.hue ?? 262}">
          ${e.greek ? `<span class="fg">${esc(e.greek)}</span>` : ''}
          <span class="ft">${esc(e.title)}</span><span class="fs">${esc(e.summary)}</span></a>`;
      }).join('')}</div>
    </section>` : ''}

    ${stories.length ? `<section class="section">
      <div class="section-head"><h2 class="section-title">Stories in Book ${cur.book}</h2><a class="section-link" href="#/myths">Timeline</a></div>
      <div class="list">${stories.slice(0, 6).map(s => {
        const p = cat.by.periods.get(s.period);
        return `<a class="row has-icon" href="#/entry/${s.id}"><span class="row-icon" style="--h:34">${icon('amphora')}</span>
          <span class="row-main"><span class="row-title"><span>${esc(s.title)}</span></span><span class="row-sub one">${esc(p?.label ?? '')}${(m => m ? ` · ${+m[1]}.${+m[2]}` : '')(firstKeyIn(s, curScope, cat).match(/(\d+)\.(\d+)$/))}</span></span>${icon('chevron', 'chev')}</a>`;
      }).join('')}</div>
    </section>` : ''}

    <section class="section">
      <div class="list">
        <a class="row has-icon" href="#/vocab/${esc(cur.work)}/${cur.book}"><span class="row-icon" style="--h:290">${icon('textformat')}</span><span class="row-main"><span class="row-title"><span>Vocabulary of Book ${cur.book}</span></span><span class="row-sub one">Every Greek word, by frequency, with glosses</span></span>${icon('chevron', 'chev')}</a>
        <a class="row has-icon" href="#/about"><span class="row-icon" style="--h:226">${icon('info')}</span><span class="row-main"><span class="row-title"><span>About this edition</span></span><span class="row-sub one">Text, translation conventions, and the state of the index</span></span>${icon('chevron', 'chev')}</a>
      </div>
    </section>
  </div>`);
  return { title: 'Library', el: view };
}
