// "Book at a glance": the shape of the book, who speaks (or, in prose, what is quoted), who is named most.
import { el, esc, icon, on, plural, kindIcon } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { linesIn, presentIn, firstKeyIn, firstLabelIn } from '../lib/scope.js';
import { bookWord, bookLabel, isBekker, isProse, bekkerLabel, rangeLabel } from '../lib/cite.js';

function tip(root) {
  const t = el('<div class="chart-tip" role="tooltip" hidden></div>');
  document.body.append(t);
  const show = row => {
    t.innerHTML = row.dataset.tip;
    t.hidden = false;
    const r = row.querySelector('.bar, .span')?.getBoundingClientRect() ?? row.getBoundingClientRect();
    const w = t.offsetWidth;
    t.style.left = `${Math.min(Math.max(12, r.left + r.width / 2 - w / 2), window.innerWidth - w - 12)}px`;
    t.style.top = `${r.top - t.offsetHeight - 8}px`;
  };
  on(root, 'pointerover', '[data-tip]', (e, row) => show(row));
  on(root, 'focusin', '[data-tip]', (e, row) => show(row));
  on(root, 'pointerout', '[data-tip]', () => { t.hidden = true; });
  on(root, 'focusout', '[data-tip]', () => { t.hidden = true; });
  return t;
}

export async function render(route) {
  const [workId, bookStr] = route.parts;
  const book = Number(bookStr);
  const [cat, text] = await Promise.all([store.catalog(), store.text(workId, book)]);
  const work = cat.by.works.get(workId);
  const total = text.lines.length;
  const last = text.lines.at(-1).n;
  const title = id => cat.by.entries.get(id)?.title ?? id;
  const S = `${workId}.${book}`;
  const here = e => linesIn(e, S, cat);
  const firstHere = e => firstLabelIn(e, S, cat);
  const Book = bookWord(work), BL = n => esc(bookLabel(work, n)), book_ = Book.toLowerCase(), prose = isProse(work), bekker = isBekker(work);
  const span = (a, b) => rangeLabel(work, book, a, b).replace(/^\d+\./, '');

  // Who speaks: lines per speaker, plus the narrator's share as context.
  const bySpeaker = new Map();
  for (const s of text.speeches) {
    const v = bySpeaker.get(s.speaker) ?? { lines: 0, speeches: 0 };
    v.lines += s.to - s.from + 1; v.speeches++;
    bySpeaker.set(s.speaker, v);
  }
  const spoken = [...bySpeaker.values()].reduce((a, v) => a + v.lines, 0);
  const speakers = [...bySpeaker].sort((a, b) => b[1].lines - a[1].lines);
  const maxSpeak = Math.max(total - spoken, speakers[0]?.[1].lines ?? 1);

  // Most named: entries of the name kinds, by number of lines.
  const nameKinds = new Set(cat.kinds.filter(k => k.names).map(k => k.id));
  const named = cat.entries.filter(e => nameKinds.has(e.kind) && here(e)).sort((a, b) => here(b) - here(a)).slice(0, 14);
  const maxNamed = named[0] ? here(named[0]) : 1;
  // Entries that first appear in this book: nothing in the work's earlier books.
  const earlier = cat.scopes.filter(sc => sc.kind === 'book' && sc.work === workId && sc.book < book).map(sc => sc.id);
  const fresh = cat.entries.filter(e => presentIn(e, S, cat) && !earlier.some(b => presentIn(e, b, cat)));

  const stories = cat.entries.filter(e => e.kind === 'story' && presentIn(e, S, cat)).sort((a, b) => firstKeyIn(a, S, cat).localeCompare(firstKeyIn(b, S, cat)));
  const tokens = text.lines.reduce((a, l) => a + l.tk.length, 0);
  // Positions along the book by a line's place in it (Bekker numbers jump at each column).
  const idx = new Map(text.lines.map((l, i) => [l.n, i]));
  const at = i => (i / Math.max(1, total - 1)) * 100;
  const pos = n => at(idx.get(n) ?? 0);
  const end = n => at((idx.get(n) ?? total - 1) + 1);
  // Axis: every hundredth line of verse; in Bekker prose, the start of each column.
  const ticks = bekker
    ? text.lines.map(l => l.n).filter((n, i, all) => i === 0 || i === all.length - 1 || Math.floor(n / 50) !== Math.floor(all[i - 1] / 50))
      .filter((n, i, all) => i === 0 || i === all.length - 1 ? true : idx.get(n) - idx.get(all[i - 1]) >= total * 0.14 && idx.get(all.at(-1)) - idx.get(n) >= total * 0.14)
    : [1, ...Array.from({ length: Math.floor((last - 1) / 100) }, (_, i) => (i + 1) * 100).filter(t => last - t > 40), last];
  const tickLabel = n => bekker ? bekkerLabel(n) : String(n);
  const dayNums = text.days.flatMap(d => (d.label.match(/\d+/g) ?? []).map(Number));
  const dayLabel = dayNums.length ? (Math.min(...dayNums) === Math.max(...dayNums) ? String(dayNums[0]) : `${Math.min(...dayNums)}–${Math.max(...dayNums)}`) : '';
  const quotations = text.quotations ?? [];
  const stats = [
    `<a class="stat" href="#/read/${workId}/${book}"><b>${total}</b><span>lines of ${prose ? 'prose' : 'verse'}</span></a>`,
    work.lexicon ? `<a class="stat" href="#/vocab/${workId}/${book}"><b>${tokens.toLocaleString()}</b><span>words, ${text.lemmas.length.toLocaleString()} distinct</span></a>`
      : `<div class="stat"><b>${tokens.toLocaleString()}</b><span>words of Greek</span></div>`,
    text.speeches.length || !prose ? `<div class="stat"><b>${text.speeches.length}</b><span>speeches, ${Math.round((100 * spoken) / total)}% of the lines</span></div>` : '',
    quotations.length ? `<div class="stat"><b>${quotations.length}</b><span>${quotations.length === 1 ? 'quotation' : 'quotations'} of poetry</span></div>` : '',
    dayLabel ? `<div class="stat"><b>${dayLabel}</b><span>${dayLabel.includes('–') ? 'days' : 'day'} of the poem's action</span></div>` : '',
    earlier.length ? `<a class="stat" href="#/index?in=${esc(S)}&sort=text"><b>${fresh.length}</b><span>index entries first met here</span></a>` : '',
    earlier.length && work.lexicon ? `<a class="stat" href="#/vocab/${workId}/${book}?new=1"><b>${text.lemmas.filter(l => l[4]).length.toLocaleString()}</b><span>words new to the ${esc(work.title)}</span></a>` : '',
  ].filter(Boolean);

  const barRow = ({ href, label, sub, value, max, muted, tipHtml }) => `
    <a class="bar-row${muted ? ' muted' : ''}" href="${href}" data-tip="${esc(tipHtml)}">
      <span class="bar-label"><span class="bar-name">${label}</span>${sub ? `<span class="bar-sub">${sub}</span>` : ''}</span>
      <span class="bar-track"><span class="bar" style="width:${Math.max(1.5, (100 * value) / max)}%"></span></span>
      <span class="bar-value">${value}</span></a>`;

  const view = el(`<div class="view">
    <header class="page-head">
      <div class="eyebrow">${esc(work.title)} · ${Book} ${BL(book)}</div>
      <h1 class="large-title" data-title-anchor>${Book} ${BL(book)} at a glance</h1>
      <p class="page-sub">${esc(text.summary)}</p>
    </header>

    <div class="stat-grid${stats.length === 4 ? ' four' : ''}">${stats.join('')}</div>

    <section class="section">
      <div class="section-head"><h2 class="section-title">The shape of the ${book_}</h2></div>
      <p class="footnote-text" style="margin:0 4px 10px">Each ${prose ? 'section' : 'scene'} placed along the ${book_}'s ${total} lines.</p>
      <div class="chart gantt">
        ${text.scenes.map((s, i) => `<a class="bar-row" href="#/read/${workId}/${book}?l=${s.from}" data-tip="${esc(`<b>${esc(s.title)}</b><br>Lines ${esc(span(s.from, s.to))} · ${plural((idx.get(s.to) ?? 0) - (idx.get(s.from) ?? 0) + 1, 'line')}`)}">
          <span class="bar-label"><span class="bar-name">${esc(s.title)}</span></span>
          <span class="bar-track">${ticks.map(t => `<i class="grid" style="left:${pos(t)}%"></i>`).join('')}<span class="span" style="left:${pos(s.from)}%;width:${Math.max(0.8, end(s.to) - pos(s.from))}%"></span></span>
          <span class="bar-value">${(idx.get(s.to) ?? 0) - (idx.get(s.from) ?? 0) + 1}</span></a>`).join('')}
        <div class="bar-row axis" aria-hidden="true"><span class="bar-label"></span><span class="bar-track">${ticks.map(t => `<span class="tick" style="left:${pos(t)}%">${tickLabel(t)}</span>`).join('')}</span><span class="bar-value"></span></div>
      </div>
    </section>

    ${quotations.length ? `<section class="section">
      <div class="section-head"><h2 class="section-title">Quoted</h2></div>
      <p class="footnote-text" style="margin:0 4px 10px">The poetry Aristotle quotes in ${Book} ${BL(book)}, and where it comes from.</p>
      <div class="list">${quotations.map(q => `<a class="row" href="#/read/${workId}/${book}?l=${q.from}${q.to !== q.from ? `-${q.to}` : ''}"><span class="row-main">
        <span class="row-title"><span>${esc(q.source ? title(q.source) : 'Unknown source')}${q.cite ? ` · ${esc(q.cite)}` : ''}</span><span class="row-meta" style="margin-left:auto;font-size:13px">${esc(span(q.from, q.to))}</span></span>
        ${q.note ? `<span class="row-sub">${esc(q.note)}</span>` : ''}</span>${icon('chevron', 'chev')}</a>`).join('')}</div>
    </section>` : ''}

    ${text.speeches.length || !prose ? `<section class="section">
      <div class="section-head"><h2 class="section-title">Who speaks</h2></div>
      <p class="footnote-text" style="margin:0 4px 10px">Lines of direct speech in ${Book} ${BL(book)}, by speaker. The narrator's lines are shown in gray for comparison.</p>
      <div class="chart">
        ${speakers.map(([id, v]) => barRow({
          href: `#/entry/${esc(id)}`, label: esc(title(id)), sub: plural(v.speeches, 'speech', 'speeches'),
          value: v.lines, max: maxSpeak, tipHtml: `<b>${esc(title(id))}</b><br>${plural(v.lines, 'line')} in ${plural(v.speeches, 'speech', 'speeches')} · ${Math.round((100 * v.lines) / total)}% of the book`,
        })).join('')}
        ${barRow({ href: `#/read/${workId}/${book}`, label: 'Narration', sub: 'the poet’s own voice', value: total - spoken, max: maxSpeak, muted: true,
          tipHtml: `<b>Narration</b><br>${plural(total - spoken, 'line')} · ${Math.round((100 * (total - spoken)) / total)}% of the book` })}
      </div>
    </section>` : ''}

    <section class="section">
      <div class="section-head"><h2 class="section-title">Most named</h2><a class="section-link" href="#/index?in=${esc(S)}&sort=freq">All by frequency</a></div>
      <p class="footnote-text" style="margin:0 4px 10px">Gods, people, peoples and places, by the number of lines in which each is named or referred to.</p>
      <div class="chart">
        ${named.map(e => {
          const k = cat.by.kinds.get(e.kind);
          return barRow({ href: `#/entry/${esc(e.id)}?in=${esc(S)}`, label: `${icon(kindIcon(k?.icon))} ${esc(e.title)}`, sub: esc(k?.one ?? ''), value: here(e), max: maxNamed,
            tipHtml: `<b>${esc(e.title)}</b> ${e.greek ? `<span class="grc">${esc(e.greek)}</span>` : ''}<br>${plural(here(e), 'line')} · first at ${esc(firstHere(e))}` });
        }).join('')}
      </div>
    </section>

    ${stories.length ? `<section class="section"><div class="section-head"><h2 class="section-title">Stories told</h2><a class="section-link" href="#/myths?view=text">In order</a></div>
      <div class="list">${stories.map(s => {
        const p = cat.by.periods.get(s.period);
        return `<a class="row" href="#/entry/${esc(s.id)}"><span class="row-main"><span class="row-title"><span>${esc(s.title)}</span></span><span class="row-sub one">${esc(p?.label ?? '')} · ${esc(firstHere(s))}</span></span>${icon('chevron', 'chev')}</a>`;
      }).join('')}</div></section>` : ''}

    <div class="spacer"></div>
    <div class="btn-row"><a class="btn" href="#/read/${workId}/${book}">${icon('book')}Read ${Book} ${BL(book)}</a>${work.lexicon ? `<a class="btn secondary" href="#/vocab/${workId}/${book}">Vocabulary</a>` : ''}</div>
  </div>`);

  const t = tip(view);
  return { title: `${Book} ${BL(book)} at a glance`, el: view, unmount: () => t.remove() };
}
