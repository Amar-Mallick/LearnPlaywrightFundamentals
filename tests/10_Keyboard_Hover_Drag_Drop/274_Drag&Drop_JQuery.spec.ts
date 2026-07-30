import { test, expect, Locator, FrameLocator } from '@playwright/test';
test('perform drag and drop in Jquery website', async ({ page }) => {
    //Open page url
    await page.goto("https://jqueryui.com/droppable/");
    //Capture iframe locator....
    const frame: FrameLocator = page.frameLocator(".demo-frame");
    //Store drag and drop element locators
    const dragBox: Locator = frame.locator("#draggable");
    const dropBox: Locator = frame.locator("#droppable");
    //Perform drag and drop functions..
    await dragBox.dragTo(dropBox);

})