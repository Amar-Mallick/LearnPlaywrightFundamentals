import { test, expect } from '@playwright/test';
const url = "https://app.thetestingacademy.com/playwright/widgets/scroll";
test.describe('Scroll to view Exercise', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });
    test('TC_01 : scrollIntoViewIfNeeded ', async ({ page }) => {
        // Playwright automatically scrolls elements into view when calling click(),
        // making explicit scrollIntoViewIfNeeded() redundant in most cases.
        // 1) scrollIntoViewIfNeeded — Playwright does the scroll for you
        await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();

        await page.getByTestId('deep-anchor').click();
        await expect(page.locator('#output')).toContainText('"clicked": "deep-anchor"');

    });
    test('TC_02 : Scroll position: 1000 px  ', async ({ page }) => {
        //x-axis =0 and y axis = 1000
        await page.evaluate(() => window.scrollBy(0, 1000));
        const midSectionLink = page.getByTestId('mid-title');
        await expect(midSectionLink).toBeVisible();

    });
    test('TC_03 : Scroll to bottom of page  ', async ({ page }) => {

        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await expect(page.locator('.tta-solution-label')).toBeVisible();

    });
    test('TC_04 : Scroll to top of the page  ', async ({ page }) => {

        await page.evaluate(() => window.scrollTo(0, 0));
        await expect(page.locator('#page-title')).toBeVisible();
        await page.waitForTimeout(3000);
    });
    test('TC_05 : Wait for CTA button to become enabled', async ({ page }) => {
        //1. Scroll the window to 75 % of total scrollable height
        await page.evaluate(() => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            window.scrollTo(0, scrollableHeight * 0.75);
        });

        const ctaButton = page.locator('#cta-button');
        // 2. Wait for the button to become enabled
        // Playwright automatically retries this until it is enabled or times out
        await expect(ctaButton).toBeEnabled();

        // 3. Click the button once enabled
        await ctaButton.click();
        // await page.pause();
    });


})