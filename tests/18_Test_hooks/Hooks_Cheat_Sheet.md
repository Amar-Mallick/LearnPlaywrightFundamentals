# Playwright Test Hooks — Cheat Sheet

Hooks run in a **Worker Scope** (per worker/process). Order for a single test:

```
beforeAll → beforeEach → TEST → afterEach → afterAll
```

## Hooks

| Hook | Runs | When to use |
|------|------|-------------|
| `test.beforeAll()` | Once per worker file, before all tests | Browser setup, logins, slow setup |
| `test.beforeEach()` | Before **every** test in the file | Page/fixture setup |
| `test.afterEach()` | After **every** test (even on failure) | Cleanup, screenshots |
| `test.afterAll()` | Once per worker file, after all tests | Tear down, close browsers |

## Order & Scope

```ts
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('1. beforeAll — once per worker');
});

test.beforeEach(async ({ page }) => {
  console.log('2. beforeEach — before each test');
  await page.goto('https://example.com');
});

test.afterEach(async ({ page }) => {
  console.log('4. afterEach — after each test');
});

test.afterAll(async () => {
  console.log('5. afterAll — once per worker');
});

test('test one', async ({ page }) => {
  console.log('3. test body');
  await expect(page).toHaveTitle('Example Domain');
});
```

## Describes (describe-level hooks)

```ts
test.describe('group', () => {
  test.beforeEach(async () => {});      // group-level, runs before each test in group
  test.afterEach(async () => {});       // group-level
  test('test', async ({ page }) => {});
});
```

- Hooks in a `describe` only apply to tests inside that group.
- Hook order: **outer describe → inner describe → test**.

## Key Rules

- Run hooks **only within a test file** (not outside `test()`).
- `beforeAll`/`afterAll` run **once per worker** — one failure may re-run the file in a new worker.
- `afterEach`/`afterAll` run **even when a test fails**.
- Define hooks **before** the `test()` calls you want them to apply to.
- Access the `page` fixture only via `beforeEach`/`afterEach` (and test body) — NOT in `beforeAll`/`afterAll`.
- State set in `beforeEach` (e.g. `page`) is **fresh per test** — hooks do not share state across tests.

## When to use

- `beforeAll`: shared login, slow one-time setup (browser context, API tokens).
- `beforeEach`: per-test setup (navigation, test data, context).
- `afterEach`: cleanup, screenshots/video on failure, reset state.
- `afterAll`: teardown — close context, log out, delete resources.
