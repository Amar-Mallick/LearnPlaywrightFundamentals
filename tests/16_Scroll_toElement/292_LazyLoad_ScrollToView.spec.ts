import { test, expect } from '@playwright/test';
const url = "https://app.thetestingacademy.com/playwright/widgets/scroll";
test.describe('Scroll to view Exercise', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });
    test('TC_01 : scrollToView lazy load scenario', async ({ page }) => {
        await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();

        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();


        const list = page.getByTestId('lazy-list').locator('li');
        const initialCount = await list.count();

        // scroll the LAST existing item into view — item 11 does not exist yet,
        // so nth(10) would just wait until the test times out.
        await list.last().scrollIntoViewIfNeeded();
        // poll untill the new items appened.

        await expect.poll(async () => list.count(), {
            message: 'expected items > 10',
            timeout: 10_000
        }).toBeGreaterThan(initialCount);

        const finalCount = await list.count();
        console.log(finalCount);
        await page.waitForTimeout(5000);
    });
})