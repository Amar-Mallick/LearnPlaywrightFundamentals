import { test, expect } from "@playwright/test";
test('Prompt Alert handling through playwright', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    //Register the dialog handle before triggring the alert

    page.once('dialog', async dialog => {
        console.log('Alert Type :', dialog.type());
        console.log('Alert Message :', dialog.message());
        // Verify the prompt text
        expect(dialog.message()).toBe('Please enter your name:');
        //In this line-7,8,9 is optional we can directly write syntax for  accept 
        // Pass the string you want to type directly into accept()
        await dialog.accept("Amar Mallick");


    })
    await page.pause();
    await page.getByText('Prompt Alert', { exact: true }).click();

})