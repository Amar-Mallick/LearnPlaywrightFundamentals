import { test, expect } from '@playwright/test';
const url: string = "";
test.describe('', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });
    test('TC_01 : ', async ({ page }) => {

    });
})
