import { test, expect } from '@playwright/test';
const domUrl: string = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom";
test.describe('Shadow DOM Widget Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(domUrl);
    });
    test('shadow dom Login verification', async ({ page }) => {
        const email = "amir@gmail.com";
        const password = "!4327";
        await page.fill('[name="email"]', email);
        await page.fill('[name="password"]', password);

        await page.getByRole('button', { name: "Submit" }).first().click();
        const status = page.getByTestId('card-account-status');
        await expect(status).toContainText(email);


    });
})