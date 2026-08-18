import { test, expect } from '@playwright/test';

// Fixtures = ready-made objects (page, browser, context, etc.)
// that Playwright gives you in the test function argument.

test.describe('Understanding Built-in Fixtures', () => {

    // 1. browserName -> which browser is running (chromium / firefox / webkit)
    test('browserName fixture', async ({ browserName }) => {
        console.log('Running on browser:', browserName);
        expect(typeof browserName).toBe('string');
    });

    // 2. browserVersion -> version of the running browser (via browser.version())
    test('browserVersion fixture', async ({ browserName, browser }) => {
        const version = browser.version();
        console.log(`Browser ${browserName} has version ${version}`);
        expect(typeof version).toBe('string');
    });

    // 3. browser -> the whole browser instance (created per test)
    test('browser fixture', async ({ browser }) => {
        const version = browser.version();
        console.log('Browser instance version:', version);
        expect(version).toBeTruthy();
    });

    // 4. context -> an isolated browser context (cookies, storage are fresh)
    test('context fixture', async ({ context }) => {
        const pages = context.pages();
        console.log('Context has pages:', pages.length);
        expect(pages.length).toBeGreaterThanOrEqual(0);
    });

    // 5. page -> a single tab inside the context (the most used fixture)
    test('page fixture', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/');
        const title = await page.title();
        console.log('Page title:', title);
        expect(title).toContain('The Testing Academy');
    });

    // 6. request -> make API calls without opening a browser page
    test('request fixture', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log('API status:', response.status());
        expect(response.status()).toBe(200);
    });

    // 7. testInfo -> details about the currently running test
    test('testInfo fixture', async ({ page }, testInfo) => {
        console.log('Test title:', testInfo.title);
        console.log('Project:', testInfo.project.name);
        expect(testInfo.title).toContain('testInfo');
    });

    // 8. Combining multiple fixtures together in one test
    test('combining all fixtures', async ({ browser, context, page, request, browserName }) => {
        console.log('Browser:', browserName);
        expect(context.pages()).toContain(page);
    });
});
