import { test, expect, FrameLocator, Locator } from '@playwright/test';
test("Handle Three deeply nested iframes", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/frames/nested-iframes");
    // Wait for a moment to ensure all deep nested frames have loaded
    await page.waitForLoadState('networkidle');

    // STEP 1: Capture ALL frames (main page + all nested iframes)
    const allFrames = page.frames();

    // STEP 2: Count the frames (subtract 1 to exclude the main parent page)
    const count: number = allFrames.length - 1;
    console.log(`I-Frame Size: ${count}`);
    // STEP 3: Loop through all frames. We start at let i = 1 to skip the main page.
    for (let i = 1; i < allFrames.length; i++) {
        // Grab the individual frame we are currently looping over
        const currentFrame = allFrames[i];
        // STEP 4: Print the frame title and name
        // .title() gets the HTML title of the frame's internal document
        const frameTitle = await currentFrame.title();
        console.log(`Frame ${i}    Title: ${frameTitle} `);
        await page.waitForTimeout(3000);
        const iframe2Title = "Pact 2 — The Testing Academy";
        if (frameTitle === iframe2Title) {
            await currentFrame.fill('#jex', "Cypress");
            break;

        }
    }



})