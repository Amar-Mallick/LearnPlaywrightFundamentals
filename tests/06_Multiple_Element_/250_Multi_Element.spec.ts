import { test, expect } from '@playwright/test';
test("verify how to handle multiple elements using allInnerText() ", async ({ page }) => {
    //1st open the url..
    //2nd capture the all elements 
    //3rd select a spcific elements using  loop & allInnerTexts()........
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const panelLink: string[] = await page.locator("a.list-group-item").allInnerTexts();
    console.log("Availble Elements Number is : " + panelLink.length);
    for (const elementText of panelLink) {
        console.log("Test-01 : " + elementText);

    }
    for (const link of panelLink) {
        if (link === "Register") {
            await page.getByText(link).first().click();
            break;
        }
    }

});
//02-Using for of loop & all() methods.................
test("verify how to handle multiple elements  using all()", async ({ page }) => {
    //1st open the url..
    //2nd capture the all elements 
    //3rd select a spcific elements using  loop & all()..
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const links = await page.locator("a.list-group-item").all();
    // Loop 1: Print all available text values
    for (const l of links) {
        const text = await l.innerText();
        console.log(text);

    }

    for (const element of links) {
        if (await element.innerText() === "Newsletter") {
            await element.click();// Click the matched element locator directly
            break;
        }
    }
})