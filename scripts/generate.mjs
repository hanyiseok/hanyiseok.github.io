import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { parseHTML } from 'linkedom';
import { projectMeta, secondary } from '../src/content/projects.mjs';
import { routes, documents } from '../src/content/routes.mjs';
import { refinePage } from './refine-page.mjs';

const origin = 'https://hanyiseok.github.io';
const layout = await readFile('src/content/layout.html', 'utf8');
const templates = await readFile('src/content/templates.html', 'utf8');
const icons = {
  'file-text':'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-9 6a2 2 0 0 1-2 0L2 7"/>',
  'chevron-right':'<path d="m9 18 6-6-6-6"/>',
  'chevron-left':'<path d="m15 18-6-6 6-6"/>',
  linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'
};
const escape = text => text.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const svg = (name, className='') => `<svg xmlns="http://www.w3.org/2000/svg" class="${className}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

// One standard page load per real URL. GA4's enhanced measurement owns file clicks;
// the three derived events are configured in GA4, never emitted again here.
// Local preview visits must not enter the production property.
const analytics = `<script>
if (location.hostname === 'hanyiseok.github.io') {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-WJD6VVZCP8');
  var tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=G-WJD6VVZCP8';
  document.head.appendChild(tag);
}
</script>`;

async function output(path, contents) {
  await mkdir(dirname(path), {recursive:true});
  await writeFile(path, contents);
}

for (const [page, route] of [...Object.entries(routes), ['notFound','/404.html']]) {
  const {document} = parseHTML(`<!doctype html><html lang="en"><head></head><body id="site"><a class="skip-link" href="#main-content">Skip to content</a>${layout}<div id="templates" hidden>${templates}</div></body></html>`);
  const content = document.querySelector('main');
  if (page === 'notFound') {
    content.innerHTML = '<section class="hs-index"><p class="hs-eyebrow">404</p><h1>Page not found</h1><p class="hs-index-intro">This page may have moved or the material may no longer be public.</p><p class="hs-index-intro"><a class="hs-text-link" href="/">Return home <i data-lucide="chevron-right"></i></a></p></section>';
  } else {
    content.innerHTML = document.querySelector(`#hanyi-${secondary[page]?'secondary':page}-template`).innerHTML;
    refinePage(document, content, page);
  }
  document.querySelector('#templates').remove();
  for (const nav of document.querySelectorAll('header nav a[data-page]')) {
    if (nav.dataset.page === (projectMeta[page]?'research':page)) nav.setAttribute('aria-current','page');
  }
  for (const link of document.querySelectorAll('[data-page]')) {
    const target = routes[link.dataset.page];
    if (!target) throw new Error(`Unknown page: ${link.dataset.page}`);
    link.setAttribute('href', target);
  }
  for (const element of document.querySelectorAll('[data-preview-file]')) {
    const key = element.dataset.previewFile.toLowerCase();
    const owner = projectMeta[page] ? page : element.closest('article')?.querySelector('h3 a[data-page]')?.dataset.page;
    const file = key === 'cv' ? 'Hanyi_Seok_CV.pdf' : key.includes('hfmc report') ? documents.hfmc : key.includes('ntu report') ? documents.ntu : documents[owner];
    if (!file) throw new Error(`Missing document mapping: ${page} / ${key}`);
    const link = document.createElement('a');
    for (const attr of element.attributes) if (!['type','data-preview-file'].includes(attr.name)) link.setAttribute(attr.name,attr.value);
    link.classList.add('hs-file-link');
    link.setAttribute('href',`/files/${file}`);
    link.setAttribute('target','_blank');
    link.setAttribute('rel','noopener');
    link.innerHTML = element.innerHTML;
    element.replaceWith(link);
  }
  for (const element of document.querySelectorAll('span[aria-hidden="true"]')) {
    const name = {'↗':'file-text','→':'chevron-right','←':'chevron-left'}[element.textContent.trim()];
    if (name) element.outerHTML = svg(name);
  }
  for (const element of document.querySelectorAll('[data-lucide]')) {
    if (!icons[element.dataset.lucide]) throw new Error(`Unknown icon ${element.dataset.lucide}`);
    element.outerHTML = svg(element.dataset.lucide);
  }
  for (const link of document.querySelectorAll('.hs-next-project>a')) if (!link.querySelector('svg')) link.innerHTML += svg('chevron-right');
  for (const element of document.querySelectorAll('img.hs-brand-icon')) element.outerHTML = svg('linkedin','hs-brand-icon');
  for (const element of document.querySelectorAll('[class]')) element.classList.remove('cursor-interaction');
  for (const element of document.querySelectorAll('*')) {
    for (const attr of [...element.attributes]) if (attr.name.startsWith('data-')) element.removeAttribute(attr.name);
  }
  // Preserve old inbound section links without a client-side redirect.
  if(page==='home') content.querySelector('.hs-trajectory').id='research';
  if(page==='about') content.querySelector('.hs-index').id='about';
  const title = page==='home' ? 'Hanyi Seok · Environmental Engineering & Applied Mathematics' : `${projectMeta[page]?.title || ({research:'Research',about:'About',notFound:'Page not found'})[page]} | Hanyi Seok`;
  const description = (content.querySelector('.hs-deck,.hs-index-intro,.hs-intro')?.textContent || 'Research in resource recovery, carbon capture and conversion.').trim().replace(/\s+/g,' ');
  document.head.innerHTML = `<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#266453"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="canonical" href="${origin}${route}"><meta property="og:type" content="website"><meta property="og:site_name" content="Hanyi Seok"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${origin}${route}"><meta name="twitter:card" content="summary"><link rel="stylesheet" href="/styles.css">${page==='notFound'?'<meta name="robots" content="noindex">':''}${analytics}`;
  await output(resolve('.generated'+route+(route.endsWith('/')?'index.html':'')),document.toString());
}
await copyFile('src/styles.css','.generated/styles.css');
await mkdir('public/fonts',{recursive:true});
await copyFile('node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2','public/fonts/geist-latin-wght-normal.woff2');
await output('public/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await output('public/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.values(routes).map(route=>`<url><loc>${origin}${route}</loc></url>`).join('')}</urlset>`);
console.log(`Generated ${Object.keys(routes).length} pages and a 404 page.`);
