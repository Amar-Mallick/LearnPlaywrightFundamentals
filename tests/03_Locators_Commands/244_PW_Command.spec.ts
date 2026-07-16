import { test, expect } from '@playwright/test';
test("simple go to -uses load by default", async ({ page }) => {
    //No wait Until specified-defaults to load
    await page.goto("https://www.example.com");
    let title = await page.title();
    console.log("Title :" + title);
    await expect(page).toHaveURL("https://www.example.com");
    console.log("URL verified");
});
test("Navigate with custom referer", async ({ page }) => {
    //Tell the server usr come from google.com
    await page.goto("https://www.amazon.com", {
        referer: "https://www.google.com"
    });
    console.log("page loaded with Google as referrer");
    console.log("URL:", page.url());


});