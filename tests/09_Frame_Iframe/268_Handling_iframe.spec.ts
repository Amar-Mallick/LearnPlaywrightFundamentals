import { test, expect, FrameLocator } from '@playwright/test';
test("Handling Vehicle Registration iframe", async ({ page }) => {
    //Open Page using url..............
    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    //await page.pause();
    //Cpture iframe .................
    const registrationFrame: FrameLocator = page.frameLocator("#frame-one");
    //Fill the form..................
    await registrationFrame.locator("#RESULT_TextField-1").fill("Fortuner");
    await registrationFrame.locator('[name = "ownerName"]').fill("Rahul Kumar");
    await registrationFrame.locator('#RESULT_TextField-3').fill("MH-12-AB-5734");
    await registrationFrame.locator('#RESULT_TextField-4').fill("2024");
    await registrationFrame.locator('[name="vehicleType"]').selectOption("SUV");
    await registrationFrame.getByPlaceholder("Any notes about the registration").fill("Successfully Registred");
    await registrationFrame.getByRole("button", { name: "Submit registration" }).click();
    //  Wait for the output element to appear after submission (Recommended)
    const output = registrationFrame.locator(".submission-output");
    await expect(output).toBeVisible();
    //  Await the extraction of the text content
    const outputText = await output.innerText();
    //  Log the actual string
    console.log(`Submission Output: ${outputText}`);



})