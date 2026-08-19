import { test, expect } from '@playwright/test';

test.describe('Student signup page', () => {
  test('renders the standalone SETU100 signup experience', async ({ page }) => {
    await page.goto('/student/signup');
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { name: 'Create your SETU100 account' })).toBeVisible();
    await expect(page.getByPlaceholder('Student full name')).toBeVisible();
    await expect(page.getByPlaceholder('Your email address')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();
    await expect(page.getByText('Got Questions?')).toBeVisible();
    await expect(page.getByText('support@setu100.com')).toBeVisible();
  });

  test('keeps the public /signup alias available', async ({ page }) => {
    await page.goto('/signup');
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { name: 'Create your SETU100 account' })).toBeVisible();
  });
});
