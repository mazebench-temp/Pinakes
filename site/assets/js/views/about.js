import { el, esc, icon } from '../lib/dom.js';
import * as store from '../lib/store.js';

export async function render() {
  const [cat, report] = await Promise.all([store.catalog(), store.report().catch(() => null)]);
  const works = cat.works.filter(w => w.notesHtml);
  const kinds = cat.kinds.filter(k => k.count);
  const view = el(`<div class="view">
    <header class="page-head">
      <h1 class="large-title" data-title-anchor>About this edition</h1>
      <p class="page-sub">What is here, where it comes from, and how the index is made.</p>
    </header>

    <section class="section"><div class="section-head"><h2 class="section-title">The texts</h2></div>
      <div class="list">${cat.works.flatMap(w => w.editions.map(e => `<div class="row"><span class="row-main"><span class="row-title"><span>${esc(w.title)} · ${esc(e.label)}</span></span><span class="row-sub">${esc(e.credit)}</span></span></div>`)).join('')}</div>
    </section>

    <section class="section"><div class="section-head"><h2 class="section-title">The index</h2></div>
      <div class="article"><p>Every entry is a Markdown file in <code>content/index/</code>. An entry lists the Greek forms that name it, and the build finds each form in the Greek text line by line. That gives every entry its list of occurrences and every line its list of entries. Names are then linked in the English of the same line. Quotes use deterministic ids, <code>{{quote:…}}</code>, so the same passage always has the same tag.</p></div>
      <div class="list">${kinds.map(k => `<a class="row has-icon" href="#/index?k=${k.id}"><span class="row-icon" style="--h:${k.hue}">${icon(k.icon === 'sparkles' ? 'sparkles' : k.icon)}</span><span class="row-main"><span class="row-title"><span>${esc(k.label)}</span></span></span><span class="row-meta">${k.count}</span>${icon('chevron', 'chev')}</a>`).join('')}</div>
      ${report ? `<p class="footnote-text">Built ${new Date(report.built).toLocaleString()}. ${report.unindexedNames.length ? `${report.unindexedNames.length} capitalized Greek words are not yet indexed.` : 'Every capitalized Greek word is indexed.'} ${report.missingLinks.length ? `${report.missingLinks.length} links point to entries not yet written.` : 'Every link resolves.'}</p>` : ''}
    </section>

    ${works.map(w => `<section class="section"><div class="section-head"><h2 class="section-title">${esc(w.title)}: translation notes</h2></div>
      <div class="article">${w.notesHtml}</div></section>`).join('')}
  </div>`);
  return { title: 'About', el: view };
}
