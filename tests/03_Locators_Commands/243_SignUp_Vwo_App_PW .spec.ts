import { test, expect } from '@playwright/test';
test("verify the vwo signup page an error message with the incorrect email id", async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");
    await page.getByRole("textbox", { name: "email" }).fill("defght");
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Create a Free Trial Account" }).first().click();
    //let errorMessage = await page.getByText("The email address you entered is incorrect").first().textContent();
    //If we use getByText() in case Devlopers may be change Text then locators not get the exact text ,If we use location locatoers we can get the element after text change also..
    let errorMessage = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();
    expect(errorMessage).toContain("The email address you entered is incorrect");
});