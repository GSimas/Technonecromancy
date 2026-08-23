import { chromium } from 'playwright';

const URL = process.env.TARGET_URL || 'http://localhost:4174';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });

const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(300);

const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
console.log('scrollHeight before any scroll:', scrollHeight);

await page.screenshot({ path: '/tmp/fullpage-desktop.png', fullPage: true });

const scrollHeightAfter = await page.evaluate(() => document.body.scrollHeight);
console.log('scrollHeight after fullpage screenshot:', scrollHeightAfter);

// log each section's bounding box height
const boxes = await page.evaluate(() =>
  Array.from(document.querySelectorAll('section[id]')).map((el) => ({
    id: el.id,
    top: Math.round(el.getBoundingClientRect().top + window.scrollY),
    height: Math.round(el.getBoundingClientRect().height),
  })),
);
console.log(JSON.stringify(boxes, null, 2));

await context.close();

const mctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mpage = await mctx.newPage();
await mpage.goto(URL, { waitUntil: 'networkidle' });
await mpage.waitForTimeout(300);
await mpage.screenshot({ path: '/tmp/fullpage-mobile.png', fullPage: true });
await mctx.close();

await browser.close();
