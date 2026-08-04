import { test, expect } from '@playwright/test';
const domUrl: string = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom";
test.describe(' Nested Shadow DOM Widget Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(domUrl);
    });
    test('verify  shadow inside shadow', async ({ page }) => {
        /*The One Golden Rule You Must Follow ⚠️
        While Playwright pierces Shadow DOMs automatically, 
        this only works for CSS selectors, Text selectors, and Role-based locators.
        XPath DOES NOT work inside a Shadow DOM. */

        const email = "amxxxir@gmail.com";
        const password = "!432687";
        await page.getByTestId('card-inside-email').fill(email);
        await page.getByTestId('card-inside-password').fill(password);
        await page.getByTestId('card-inside-submit').click();
        const status = page.getByTestId('card-inside-status');
        await expect(status).toContainText(email);


    });
})