import { test, expect } from '@playwright/test';

test.describe('Understanding Playwright Hooks', () => {
    // Force tests in this file to run sequentially in 1 worker
    test.describe.configure({ mode: 'serial' });

    // 1. Runs ONCE before any tests in this group start
    test.beforeAll(async () => {
        console.log('1. [beforeAll] 🚀 Initializing test suite / Setting up database');
    });

    // 2. Runs BEFORE EACH test
    test.beforeEach(async ({ page }) => {
        console.log('  2. [beforeEach] 🌐 Opening home page before running test');
        await page.goto('https://app.thetestingacademy.com/playwright/');
    });

    // --- TEST 1 ---
    test('TC01: Check Page Title', async ({ page }) => {
        console.log('    🧪 [Executing Test 1] Checking title...');
        await expect(page).toHaveTitle(/The Testing Academy/);
    });

    // --- TEST 2 ---
    test('TC02: Check Main Heading', async ({ page }) => {
        console.log('    🧪 [Executing Test 2] Checking heading text...');
        await expect(page.locator('h1')).toContainText('Practise Playwright on');
    });

    // 3. Runs AFTER EACH test
    test.afterEach(async () => {
        console.log('  3. [afterEach] 🧹 Clearing cookies / Resetting test state');
    });

    // 4. Runs ONCE after all tests in this group finish
    test.afterAll(async () => {
        console.log('4. [afterAll] 🏁 Teardown completed / Closing database connection');
    });

});