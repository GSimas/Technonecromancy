import { chromium } from 'playwright';

const URL = process.env.TARGET_URL || 'http://localhost:4174';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });

async function shoot(vpName, width, height) {
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);

  const ids = await page.evaluate(() => Array.from(document.querySelectorAll('section[id]')).map((s) => s.id));
  await page.screenshot({ path: `/tmp/sec-${vpName}-hero.png` });

  for (const id of ids) {
    await page.evaluate((sectionId) => {
      const el = document.getElementById(sectionId);
      const y = el.getBoundingClientRect().top + window.scrollY - 12;
      window.scrollTo({ top: y, behavior: 'instant' });
    }, id);
    await page.waitForTimeout(500);
    await page.screenshot({ path: `/tmp/sec-${vpName}-${id}.png` });
  }

  // footer
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/sec-${vpName}-footer.png` });

  await context.close();
}

await shoot('desktop', 1440, 900);
await shoot('mobile', 390, 844);
await browser.close();
