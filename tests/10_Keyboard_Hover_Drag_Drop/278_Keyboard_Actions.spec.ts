import { test, expect } from '@playwright/test';
test('use multiple keyborad fn ', async ({ page }) => {
    await page.goto("https://gotranscript.com/text-compare");
    //Find two textbox ..........
    const box1 = await page.getByRole('textbox', { name: 'Paste one version of the text here.' });
    const box2 = await page.getByRole('textbox', { name: 'Paste another version of the text here.' });
    //Ente  text in Box1.....
    await box1.fill("Welcome to my World!");
    //Select all text of box1
    await page.keyboard.press('Control+A');
    //Copy all text of box1
    await page.keyboard.press('Control+C');
    //Use Tab keyboard move from box1 to box2
    await page.keyboard.press('Tab');
    //Paste text in box2
    await page.keyboard.press('Control+V');
    await expect(box2).toHaveValue('Welcome to my World!');
    // await page.pause();

})