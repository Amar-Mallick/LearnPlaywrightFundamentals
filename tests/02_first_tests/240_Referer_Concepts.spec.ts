//Referer (an HTTP request header):- Tells the server which page you were on immediately before navigating to the current page.

import { test, expect } from "@playwright/test";
test('Refferer Concepts', async ({ page }) => {
    await page.goto('https://amazon.com', {
        referer: "https://google.com"
    });
})