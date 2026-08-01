import { test, expect } from '@playwright/test';
test('use keyboard in playwright', async ({ page }) => {
    await page.goto("https://www.toptal.com/developers/keycode");
    await page.keyboard.type('d');
    await page.screenshot({ path: 'd.png' });
})