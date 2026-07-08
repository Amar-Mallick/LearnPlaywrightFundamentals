import { test, expect } from "@playwright/test";
test('Context With Options', async ({ browser }) => {
    let Context1 = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        locale: 'USA',
        geolocation: { latitude: 2345, longitude: 125676 },
        timezoneId: "USA TimeZone",
        permissions: ['geolocation']
    });
    let page = await Context1.newPage();
    await page.goto('https://app.vwo.com/#login');
    await Context1.close();
});
test(' Mobile Context ', async ({ browser }) => {
    let iphone = await browser.newContext({
        viewport: { width: 375, height: 667 },
        userAgent: 'Mozila/5.0......',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true
    });
    let page = await iphone.newPage();
    await page.goto('https://app.vwo.com/#login');
    await iphone.close();
});