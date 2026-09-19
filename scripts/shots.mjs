// Batched review screenshots: desktop + mobile, light + dark.
// Usage: node scripts/shots.mjs [baseUrl]   (default http://localhost:4322)
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';

const base = process.argv[2] ?? 'http://localhost:4322';
const out = '.impeccable/review';
mkdirSync(out, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox'],
});

async function shot(name, { width, height, dark, path = '/', reduced = true, full = true, wait = 600 }) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.emulateMediaFeatures([
    { name: 'prefers-color-scheme', value: dark ? 'dark' : 'light' },
    { name: 'prefers-reduced-motion', value: reduced ? 'reduce' : 'no-preference' },
  ]);
  await page.goto(base + path, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, wait));
  await page.screenshot({ path: `${out}/${name}.png`, fullPage: full });
  await page.close();
}

await shot('desktop', { width: 1440, height: 900, dark: false });
await shot('desktop-dark', { width: 1440, height: 900, dark: true });
await shot('mobile', { width: 390, height: 844, dark: false });
await shot('mobile-dark', { width: 390, height: 844, dark: true });
await shot('hero-animated', { width: 1440, height: 900, dark: false, reduced: false, full: false, wait: 3200 });
await shot('tablet', { width: 1024, height: 768, dark: false, full: false });
await shot('legal', { width: 1440, height: 900, dark: false, path: '/datenschutz.html' });
await shot('notfound', { width: 1440, height: 900, dark: false, path: '/404.html', full: false });

// Hover states: project row + mail link
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.emulateMediaFeatures([
    { name: 'prefers-reduced-motion', value: 'reduce' },
    { name: 'prefers-color-scheme', value: 'light' },
  ]);
  await page.goto(base + '/', { waitUntil: 'networkidle0' });
  await page.hover('.project:nth-child(2) a');
  await new Promise((r) => setTimeout(r, 400));
  const row = await page.$('.project:nth-child(2)');
  await row.scrollIntoView();
  await page.screenshot({ path: `${out}/hover-project.png` });
  await page.hover('.mail-link');
  await new Promise((r) => setTimeout(r, 400));
  await (await page.$('.mail-link')).scrollIntoView();
  await page.screenshot({ path: `${out}/hover-mail.png` });
  await page.close();
}

await browser.close();
console.log('done');
