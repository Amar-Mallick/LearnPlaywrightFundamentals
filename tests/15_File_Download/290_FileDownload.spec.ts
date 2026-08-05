import { test, expect } from '@playwright/test';

const url = "https://app.thetestingacademy.com/playwright/widgets/upload-download";
test.describe('File Download Exercise', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });
    test('TC_01 : Download Text File and Save', async ({ page }) => {
        /** Trigger download listener
  const downloadPromise = page.waitForEvent('download');
  await page.getByTestId('download-text').click();
  const download = await downloadPromise; */

        // Start waiting for download before triggering the click action
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-text').click()
        ]);
        //Save files in side the project folder....
        await download.saveAs(`./Download_File/${download.suggestedFilename()}`);
    });
    test('TC_02 : Download json File and save', async ({ page }) => {
        const downloadPromise = page.waitForEvent('download');
        await page.getByTestId('download-json').click();
        const download = await downloadPromise;
        //Save files in side the project folder....
        await download.saveAs(`./Download_File/${download.suggestedFilename()}`);
    });
})