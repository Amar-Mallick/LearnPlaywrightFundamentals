import { chromium, Browser, BrowserContext, Page } from "playwright";
async function run() {
    //LEVEL-01: Launch Browser -Do it once
    let browser: Browser = await chromium.launch({ headless: false });
    console.log('Browser Launched ', browser);
    //LEVEL-02:Launch Browser Context
    let context1: BrowserContext = await browser.newContext();
    console.log('Context Created ', context1);
    let context2: BrowserContext = await browser.newContext();
    console.log('Context Created ', context2);
    let context3: BrowserContext = await browser.newContext();
    console.log('Context Created ', context3);
    //LEVEL-03: Open Page
    let page: Page = await context1.newPage();
    console.log('Page is Opened');
    await page.goto('https://app.vwo.com/');
    console.log("PageTitle : ", await page.title());
    //CleanUp reverse order.......
    await page.close();
    await context1.close();
    await context2.close();
    await context3.close();
    await browser.close();

}
run();