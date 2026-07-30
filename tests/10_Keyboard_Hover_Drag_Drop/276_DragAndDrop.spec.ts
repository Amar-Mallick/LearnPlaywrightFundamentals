import { test, expect } from '@playwright/test';
test('Drag and Drop kanbon board', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');
    //  await page.pause();
    const src = page.getByTestId('card-write-spec').first();
    const target = page.getByTestId('col-in-progress');
    await src.dragTo(target);
    // await page.pause();
})