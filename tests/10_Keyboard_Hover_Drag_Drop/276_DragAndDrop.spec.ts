import { test, expect } from '@playwright/test';
test('Drag and Drop kanbon board', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');
    //  await page.pause();
    const src = page.getByTestId('card-write-spec').first();
    const target = page.getByTestId('col-in-progress');
    // Where drag to() methods not work properly for drag and drop  we can use boundingBox concepts.
    // 1. Ensure elements are in the viewport so bounding box works
    await src.scrollIntoViewIfNeeded();
    await target.scrollIntoViewIfNeeded();

    // 2. Grab the bounding boxes (X, Y coordinates and dimensions)
    const srcBox = await src.boundingBox();
    const targetBox = await target.boundingBox();

    // Verify they exist on screen
    expect(srcBox).not.toBeNull();
    expect(targetBox).not.toBeNull();

    if (srcBox && targetBox) {
        // 3. Calculate the center of the source card
        const startX = srcBox.x + (srcBox.width / 2);
        const startY = srcBox.y + (srcBox.height / 2);
        /**Screen Left Edge (0px)
|
|      <-- srcBox.x (100px) --> _______________________________________
|                               |                                     |
|                               |          YOUR KANBAN CARD           |
|                               |            (200px wide)             |
|                               |_____________________________________|
|                                                 ^
|                                                 |
|                                        This is startX (200px).
|                                        (100px left edge + 100px to the middle) */

        // 4. Calculate the center of the target column
        const endX = targetBox.x + (targetBox.width / 2);
        const endY = targetBox.y + (targetBox.height / 2);

        // 5. Execute the precise mouse movements
        await page.mouse.move(startX, startY);
        await page.mouse.down(); // Click and hold the card

        // Move slightly first to "wake up" the Kanban drag listener
        await page.mouse.move(startX + 10, startY + 10, { steps: 5 });
        await page.waitForTimeout(200);

        // Drag to the target column slowly over 20 steps
        await page.mouse.move(endX, endY, { steps: 20 });

        // Hover over the target column briefly so the UI recognizes the drop zone
        await page.waitForTimeout(500);

        await page.mouse.up(); // Release the mouse
        await page.waitForTimeout(2000);
    }
})