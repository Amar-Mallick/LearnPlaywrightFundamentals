import { test, expect } from "@playwright/test";
test('Simple Alert handling through playwright', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    //Register the dialog handle before triggring the alert

    page.once('dialog', async dialog => {
        console.log('Alert Type :', dialog.type());
        console.log('Alert Message :', dialog.message());
        expect(dialog.message()).toBe('I am an alert box!');
        //In this line-7,8,9 is optional we can directly write syntax for  accept 
        await dialog.accept();
    })
    await page.getByText('Simple Alert', { exact: true }).click();

})