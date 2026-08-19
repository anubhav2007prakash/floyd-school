import { chromium, devices } from '@playwright/test';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(devices['Pixel 5']);
  const page = await context.newPage();
  try {
    console.log('Navigating to page...');
    await page.goto('http://localhost:4173/school-partnerships', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1500);
    console.log('Waiting for gallery header...');
    await page.waitForSelector('text=NextGen Learning Labs', { timeout: 20000 });
    console.log('Screenshot: before click');
    await page.screenshot({ path: 'test-results/debug_before_click_mobile.png', fullPage: true });

    // Try multiple click strategies
    const strategies = [
      async () => {
        console.log('Strategy: click .group');
        const el = await page.$('.group');
        if (el) await el.click();
      },
      async () => {
        console.log('Strategy: click first img');
        const img = await page.$('img');
        if (img) await img.click();
      },
      async () => {
        console.log('Strategy: DOM click via evaluate');
        await page.evaluate(() => {
          const tile = document.querySelectorAll('.group')[0] || document.querySelectorAll('img')[0];
          tile && tile.click && tile.click();
        });
      }
    ];

    for (const strat of strategies) {
      try {
        await strat();
        await page.waitForTimeout(1200);
        await page.screenshot({ path: `test-results/debug_after_click_${Date.now()}.png`, fullPage: true });
      } catch (err) {
        console.error('Strategy error', err.message);
      }
    }

    const content = await page.content();
    fs.writeFileSync('test-results/debug_page_content_mobile.html', content);
    console.log('Saved page content and screenshots to test-results/');
  } catch (err) {
    console.error('Debug run failed:', err);
  } finally {
    // keep browser open briefly so user can inspect
    console.log('Leaving browser open for 8s for manual inspection...');
    await page.waitForTimeout(8000);
    await browser.close();
  }
})();
