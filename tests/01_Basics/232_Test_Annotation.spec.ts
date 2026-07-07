import { test, expect } from '@playwright/test';

// ==========================================
// 01) ONLY ANNOTATION
// ==========================================
// Note: If you leave test.only active, Playwright will ignore tests 02 through 05!
test.only('01) Focus Test', async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveURL("https://www.google.com");
});

// ==========================================
// 02) SKIP ANNOTATION
// ==========================================
test.skip('02) Skipped Test', async ({ page }) => {
    // This test will completely be skipped and ignored by the runner.
});

// ==========================================
// 03) FAIL ANNOTATION
// ==========================================
test.fail('03) Expected Failure Test', async ({ page }) => {
    // This test MUST fail an assertion inside to pass the build successfully.
    expect(1).toBe(2);
});

// ==========================================
// 04) FIX-ME ANNOTATION
// ==========================================
test('04) Fixme Test', async ({ page }) => {
    test.fixme(); // Aborts test execution immediately and flags it in your report
    await page.goto("https://www.google.com");
});

// ==========================================
// 05) CONDITIONAL SKIP ANNOTATION
// ==========================================
// FIX: We must declare browserName in the parameters to use it safely without IDE errors!
test('05) Conditional Skip Test', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'This specific feature is not supported on Safari/Webkit');
    await page.goto("https://www.google.com");
});

// ==========================================
// 06) SLOW ANNOTATION
// ==========================================
test('06) Slow Test Execution', async ({ page }) => {
    // Declaring slow() inside the test body grants it 3x more default timeout limit.
    test.slow();
    await page.goto("https://www.google.com");
});