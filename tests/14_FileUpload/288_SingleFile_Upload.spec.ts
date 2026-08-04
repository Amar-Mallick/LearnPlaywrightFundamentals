import { test, expect } from '@playwright/test';
const url: string = "https://the-internet.herokuapp.com/upload";
const url2: string = "https://www.testkru.com/Elements/Files";
test.describe('File uploads using Playwrwight', () => {

    test('TC_01 : Single file upload using playwright ', async ({ page }) => {
        await page.goto(url);
        await page.locator('#file-upload').setInputFiles('tests/Upload Files/File1.pdf');
        await page.locator('#file-submit').click();
        // await page.waitForTimeout(3000);
    });
    test('TC_02 : Multiple file upload using playwright ', async ({ page }) => {
        await page.goto(url2);
        const fileInput = page.locator('#multiFileUpload');
        await fileInput.setInputFiles(['tests/Upload Files/File1.pdf',
            'tests/Upload Files/Amar.png'
        ]);
        await page.waitForTimeout(5000);
        //Remove files(Removing file use only empty array )..........
        await fileInput.setInputFiles([]);
        await page.waitForTimeout(5000);
    });
})
