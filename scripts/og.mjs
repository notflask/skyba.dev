// Renders public/og.png (1200x630) from the live site's own fonts and styles.
// Usage: serve dist on :4322, then `node scripts/og.mjs`
import puppeteer from 'puppeteer-core';

const base = process.argv[2] ?? 'http://localhost:4322';

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.emulateMediaFeatures([
  { name: 'prefers-color-scheme', value: 'light' },
  { name: 'prefers-reduced-motion', value: 'reduce' },
]);
await page.goto(base + '/', { waitUntil: 'networkidle0' });

await page.evaluate(() => {
  document.body.innerHTML = `
    <div style="height:630px;padding:84px 88px;display:flex;flex-direction:column;justify-content:space-between;background:var(--bg)">
      <div style="font-family:var(--font-mono);font-size:22px;color:var(--ink-3)">skyba.dev</div>
      <div>
        <h1 class="hero-name" style="font-size:132px">Danilo
          <span class="signed">Skyba<svg class="signed-line" viewBox="0 0 300 26" fill="none"><path pathLength="1" style="stroke-dashoffset:0" d="M4 17C52 7 96 22 150 13C198 5 246 19 296 9"></path></svg></span>
        </h1>
        <p style="margin-top:56px;font-size:34px;line-height:1.3;color:var(--ink-2);white-space:nowrap">Duales Studium Informatik. C++, C und Linux.</p>
      </div>
    </div>`;
  document.querySelectorAll('.hero-name .line').forEach((el) => el.classList.remove('rise'));
});
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: 'public/og.png' });
await browser.close();
console.log('public/og.png written');
