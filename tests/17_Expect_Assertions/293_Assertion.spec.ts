import { test, expect } from '@playwright/test';
test.describe('Assertions in Playwright', () => {
    test('Assertions ', async ({ page }) => {
        //`toBe(value)` | strict equality (`===`) |
        expect(5 + 3).toBe(8);
        //| `toEqual(value)` | deep equality (objects/arrays) |
        const arr = [1, 2, 3];
        expect([1, 2, 3]).toEqual(arr);
        //`toBeTruthy()` / `toBeFalsy()` | truthy / falsy value |
        expect(true).toBeTruthy();
        expect(false).toBeFalsy();
        //Greater than()
        expect(20).toBeGreaterThan(15);
    });
})