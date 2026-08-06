import { test, expect } from '@playwright/test';

const url: string = "https://the-internet.herokuapp.com/upload";
test.describe('File Upload 2 - Upload from buffer', () => {
    test('TC_01 : Upload file directly from buffer', async ({ page }) => {
        await page.goto(url);
        /**When uploading files using Playwright's setInputFiles(),
         *  passing an object containing a buffer and mimeType allows 
         * you to upload files entirely in-memory without creating physical test files
         *  on your machine. */
        await page.locator('#file-upload').setInputFiles({
            name: 'test-data.csv',
            mimeType: 'text/csv',
            buffer: Buffer.from('id,name\n1,Alice\n2,Bob')
        });
        await page.locator('#file-submit').click();
        await expect(page.locator('h3')).toHaveText('File Uploaded!');
        await expect(page.locator('#uploaded-files')).toContainText('test-data.csv');
        await page.waitForTimeout(5000);
    });
})
