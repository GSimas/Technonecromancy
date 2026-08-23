import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const URL = process.env.TARGET_URL || 'http://localhost:4173';
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
let hadErrors = false;

for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();

  const consoleErrors = [];
  const failedRequests = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('response', (res) => {
    if (res.status() >= 400) failedRequests.push(`${res.status()} ${res.url()}`);
  });
  page.on('pageerror', (err) => consoleErrors.push(String(err)));

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // scroll through whole page to trigger whileInView animations & lazy content
  await page.evaluate(async () => {
    const step = 600;
    const total = document.body.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(300);

  const title = await page.title();
  const bodyBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  const htmlLang = await page.evaluate(() => document.documentElement.lang);
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  const h1Count = await page.locator('h1').count();
  const headings = await page.evaluate(() =>
    Array.from(document.querySelectorAll('h1,h2,h3')).map((h) => h.tagName),
  );

  console.log(`\n=== ${vp.name} (${vp.width}x${vp.height}) ===`);
  console.log('title:', title);
  console.log('html lang:', htmlLang);
  console.log('body bg:', bodyBg);
  console.log('h1 count:', h1Count);
  console.log('heading order (first 20):', headings.slice(0, 20).join(' > '));
  console.log('horizontal overflow (scrollWidth > clientWidth):', scrollWidth > clientWidth, `(${scrollWidth} vs ${clientWidth})`);
  console.log('console errors:', consoleErrors.length ? consoleErrors : 'none');
  console.log('failed requests (>=400):', failedRequests.length ? failedRequests : 'none');

  if (consoleErrors.length || failedRequests.length || scrollWidth > clientWidth) hadErrors = true;

  // axe accessibility scan
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
  console.log('axe violations:', results.violations.length);
  if (results.violations.length) {
    hadErrors = true;
    for (const v of results.violations) {
      console.log(`  - [${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} nodes)`);
      for (const n of v.nodes.slice(0, 3)) {
        console.log('      target:', n.target.join(' '));
      }
    }
  }

  await page.screenshot({ path: `/tmp/screenshot-${vp.name}-top.png` });
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight * 0.35, behavior: 'instant' }));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/screenshot-${vp.name}-mid.png` });
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/screenshot-${vp.name}-bottom.png` });
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.waitForTimeout(200);

  // toggle to EN and re-check quickly
  const enButton = page.getByRole('button', { name: 'EN', exact: true });
  if (await enButton.count()) {
    await enButton.click();
    await page.waitForTimeout(300);
    const langAfter = await page.evaluate(() => document.documentElement.lang);
    console.log('lang after EN toggle:', langAfter);
    await page.screenshot({ path: `/tmp/screenshot-${vp.name}-en-top.png` });
  }

  await context.close();
}

await browser.close();
console.log(hadErrors ? '\nRESULT: ISSUES FOUND' : '\nRESULT: ALL CLEAR');
process.exit(hadErrors ? 1 : 0);
