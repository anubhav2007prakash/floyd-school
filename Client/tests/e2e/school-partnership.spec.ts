import { test, expect } from '@playwright/test';

test.describe('School Partnership page smoke', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/school-partnerships');
    await page.waitForLoadState('networkidle');
  });

  test('renders hero and gallery (desktop)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.waitForSelector('text=NextGen Learning Labs', { timeout: 15000 });
    await page.waitForSelector('role=button[name="Schedule Campus Setup Demo"]', { timeout: 15000 });
    const hero = page.locator('section').first();
    await hero.screenshot({ path: 'test-results/hero-desktop.png', fullPage: false });

    const tiles = await page.$$('img');
    if (tiles.length === 0) throw new Error('No image tiles found on page');
  });

  test('gallery lightbox opens on tile click (mobile)', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    // Use direct DOM click to avoid any overlay/pointer interception issues in preview mode
    const gallerySection = page.locator('section', { hasText: 'NextGen Learning Labs' });
    await gallerySection.waitFor({ timeout: 15000 });
    await gallerySection.scrollIntoViewIfNeeded();
    const firstTile = gallerySection.locator('.group').first();
    await firstTile.scrollIntoViewIfNeeded();
    // Use locator.tap() under the mobile project (touch-enabled)
    await firstTile.tap();
    await expect(page.locator('role=button[name="Inquiry for School Lab Session"]')).toBeVisible({ timeout: 10000 });
    await page.screenshot({ path: 'test-results/lightbox-mobile.png', fullPage: true });
  });
});
