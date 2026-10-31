/* Cyberpunk411 smoke test.
   Loads the real index.html + every script in a jsdom window, skips both
   splashes, then exercises each section and walks the entire walkthrough. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

const html = read('index.html').replace(/<script[\s\S]*?<\/script>/g, '');
const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true, url: 'http://localhost/' });
const { window } = dom;
const doc = window.document;

const errors = [];
window.addEventListener('error', (e) => errors.push('window error: ' + e.message));
window.scrollTo = () => {};
window.HTMLElement.prototype.scrollIntoView = function () {};

const files = [
  'js/data/guns.js',
  'js/data/walkthrough.js',
  'js/data/beginner.js',
  'js/data/lore.js',
  'js/core.js',
  'js/coin.js',
  'js/ui.js',
  'js/walkthrough.js',
  'js/app.js'
];

for (const file of files) {
  try {
    window.eval(read(file));
  } catch (err) {
    errors.push('load ' + file + ': ' + err.stack);
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const click = (node) => node && node.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
const skipSplashes = async () => {
  await sleep(300);
  doc.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'a' }));
  await sleep(10500); // boot bar
};

const results = [];
const check = (label, pass) => {
  results.push({ label, pass });
  console.log((pass ? '  ok   ' : '  FAIL ') + label);
};

await skipSplashes();

check('app visible after boot', doc.getElementById('app').hidden === false);
check('first-boot pop-up opened', doc.getElementById('modal-root').hidden === false);
click(doc.querySelector('[data-close]'));
await sleep(200);

for (const view of ['start', 'arsenal', 'walkthrough', 'beginner', 'money', 'ps4', 'faq']) {
  click(doc.querySelector('.tab[data-view="' + view + '"]'));
  await sleep(380);
  check('section renders: ' + view, doc.getElementById('view-' + view).classList.contains('is-active'));
}

click(doc.querySelector('.tab[data-view="arsenal"]'));
await sleep(380);
click(doc.querySelector('[data-filter="pistol"]'));
await sleep(120);
check('arsenal filter works', doc.querySelectorAll('#gun-grid .gun-card').length === 7);
click(doc.querySelector('[data-filter="all"]'));
await sleep(120);
check('arsenal grid populated', doc.querySelectorAll('#gun-grid .gun-card').length === 14);
click(doc.querySelector('[data-gun]'));
await sleep(220);
check('gun detail modal opens', /ARSENAL/.test(doc.getElementById('modal-title').textContent));
click(doc.querySelector('.modal__x'));
await sleep(160);

click(doc.querySelector('.tab[data-view="beginner"]'));
await sleep(380);
click(doc.querySelector('[data-check]'));
await sleep(200);
click(doc.querySelector('#pop-choices .pop__choice'));
await sleep(200);
check('beginner pop-up branches into an answer', /ANSWER/.test(doc.getElementById('modal-title').textContent));
click(doc.querySelector('[data-close]'));
await sleep(200);
check('check progress recorded', doc.getElementById('check-ring-text').textContent !== '0%');

click(doc.querySelector('.tab[data-view="walkthrough"]'));
await sleep(380);
let guard = 0;
let completed = false;
while (guard++ < 80) {
  const card = doc.querySelector('.wt-card');
  if (!card) break;
  if (card.classList.contains('wt-done')) { completed = true; break; }
  click(card.querySelector('[data-choice]'));
  await sleep(30);
  const cont = doc.getElementById('wt-continue');
  if (!cont) break;
  click(cont);
  await sleep(70);
}
check('walkthrough reaches its completion screen', completed || !!doc.querySelector('.wt-done'));
check('walkthrough progress is 26/26', /26 \/ 26/.test(doc.getElementById('wt-step-count').textContent));

const stage = doc.querySelector('#hero-coin-stage .coin-stage');
for (let i = 0; i < 7; i++) click(stage);
await sleep(900);
check('seven coin clicks reveal a secret', /COIN SPEAKS/.test(doc.getElementById('modal-title').textContent));
check('3D coin built (rim + faces)', doc.querySelectorAll('.coin__rim').length > 0 && doc.querySelectorAll('.coin__face').length > 0);

check('no runtime errors', errors.length === 0);
if (errors.length) errors.forEach((e) => console.log('    ' + e));

const failed = results.filter((r) => !r.pass);
console.log('\n' + (failed.length ? failed.length + ' FAILING' : 'all ' + results.length + ' checks passed'));
process.exit(failed.length ? 1 : 0);
