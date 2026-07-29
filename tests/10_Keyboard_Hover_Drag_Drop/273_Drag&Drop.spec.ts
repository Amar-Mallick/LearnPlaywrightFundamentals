import { test, expect } from '@playwright/test';
const url = "https://the-internet.herokuapp.com/drag_and_drop";
test.describe("drag and drop done in herokuapp ", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

    test("drag and drop exercise", async ({ page }) => {
        await page.pause();
        const src = page.locator("#column-a");
        const target = page.locator("#column-b");
        // Call dragTo() directly on the source locator, passing the target locator
        await src.dragTo(target);

    });
})
