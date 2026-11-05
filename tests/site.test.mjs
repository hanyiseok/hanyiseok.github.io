import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = resolve(process.env.SITE_DIR || 'dist');
const routes = ['/', '/research/', '/about/', '/research/hfmc/', '/research/neu/', '/research/arww/', '/research/rutgers/', '/research/kentech/', '/research/toxcast/', '/projects/anyang-stream/', '/projects/saf/', '/projects/campus/'];
const files = ['Hanyi_Seok_CV.pdf', 'hfmc-report.pdf', 'ntu-report.pdf', 'arww-project-brief.pdf', 'neu-project-brief.pdf', 'rutgers-project-brief.pdf', 'kentech-project-brief.pdf', 'toxcast-project-brief.pdf', 'anyang-stream-project-brief.pdf', 'saf-project-brief.pdf', 'campus-project-brief.pdf'];
test('every shared URL contains its own readable article without a client router', () => {
  const titles = new Set();
  for (const route of routes) {
    const html = readFileSync(join(root, route, 'index.html'), 'utf8');
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title, route);
    assert.ok(!titles.has(title), `duplicate title: ${route}`);
    titles.add(title);
    assert.match(html, /<h1[\s>]/, route);
    assert.match(html, /<main[\s>]/, route);
    assert.ok(html.includes(`https://hanyiseok.github.io${route}`), `canonical: ${route}`);
    assert.ok(!/data-preview|widgetState|setWidgetState/.test(html), route);
    for (const [, href] of html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
      assert.ok(existsSync(join(root, href, href.endsWith('/') ? 'index.html' : '')), `${route} -> ${href}`);
    }
  }
});
test('all linked fresh documents are actual PDF files and excluded materials are absent', () => {
  assert.deepEqual(readdirSync(join(root, 'files')).sort(), files.sort());
  for (const file of files) assert.equal(readFileSync(join(root, 'files', file)).subarray(0, 5).toString(), '%PDF-');
  for (const route of routes) assert.ok(!/transcript|FeEDDHA|SELFIES ALPHA/i.test(readFileSync(join(root, route, 'index.html'), 'utf8')), route);
});
test('unknown URLs receive an accessible not-found page with a way home', () => {
  const html = readFileSync(join(root, '404.html'), 'utf8');
  assert.match(html, /Page not found/);
  assert.match(html, /href="\/"/);
});
