import { test, expect } from '@playwright/test';

test.describe('Dashboard Tests', () => {
  test('page has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Modern Dashboard');
  });

  test('header shows correct text', async ({ page }) => {
    await page.goto('/');
    const headerText = await page.locator('text=Modern Dashboard').first();
    await expect(headerText).toBeVisible();
  });

  test('sidebar menu items are visible when opened', async ({ page }) => {
    await page.goto('/');
    // Click the menu button to open sidebar
    await page.click('button[aria-label="menu"]');
    
    // Check if all menu items are visible
    const menuItems = ['Dashboard', 'Analytics', 'Users', 'Settings'];
    for (const item of menuItems) {
      const menuItem = await page.locator(`text=${item}`);
      await expect(menuItem).toBeVisible();
    }
  });

  test('theme toggle works', async ({ page }) => {
    await page.goto('/');
    // Click the theme toggle button
    await page.click('button[aria-label="theme-toggle"]');
    
    // Check if the theme has changed by verifying the background color
    const body = await page.locator('body');
    await expect(body).toHaveCSS('background-color', 'rgb(18, 18, 18)');
  });
});