# Playwright Assertions Cheatsheet

> Auto-retrying assertions poll the DOM until the condition is met (default timeout: **5s**) and are the recommended way to assert UI state. Value/object assertions below marked *no auto-retry* run once, immediately.
>
> Customize timeout/retries per assertion:
> ```ts
> await expect(locator).toBeVisible({ timeout: 10_000 });
> expect(locator).toBeVisible({ timeout: 10_000, retries: 3 });
> ```
> Or globally in `playwright.config.ts` via `expect: { timeout: 10_000 }`.

---

## 1. Auto-Retrying Assertions (Locators)

### Visibility & State
| Assertion | Checks |
|---|---|
| `toBeVisible()` | element is attached & visible |
| `toBeHidden()` | element is detached OR hidden |
| `toBeAttached()` | element is present in DOM (visible or not) |
| `toBeEnabled()` | element is not disabled |
| `toBeDisabled()` | element is disabled |
| `toBeEditable()` | element is editable (input/textarea/select) |
| `toBeFocused()` | element has focus |
| `toBeChecked()` | checkbox/radio is checked |
| `toBeInViewport()` | element is within the visible viewport |

```ts
await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
await expect(page.getByLabel('Email')).toBeEditable();
await expect(page.getByRole('checkbox')).toBeChecked();
await expect(page.getByPlaceholder('Search')).toBeFocused();
await expect(page.locator('.loading')).toBeHidden();
```

### Text & Content
| Assertion | Checks |
|---|---|
| `toHaveText(text)` | **exact** full text matches |
| `toContainText(text)` | text **contains** the given substring(s) |
| `toHaveValue(value)` | input/select has exact value |
| `toHaveValues(values)` | multi-select has given values |
| `toHaveTitle(title)` | page title (used on `page`) |
| `toHaveURL(url)` | page URL (glob/regex supported) |

```ts
await expect(page.getByRole('heading', { name: 'Welcome' })).toHaveText('Welcome to the App');
await expect(page.locator('.error')).toContainText('invalid');
await expect(page.getByPlaceholder('Search')).toHaveValue('playwright');
await expect(page).toHaveTitle('My App');
await expect(page).toHaveURL('**/checkout');
```

### Attributes, CSS & Class
| Assertion | Checks |
|---|---|
| `toHaveAttribute(name, value)` | element attribute equals value (value optional) |
| `toHaveClass(class)` | class attribute matches (string/regex/array) |
| `toHaveCSS(prop, value)` | computed CSS style |
| `toHaveId(id)` | element `id` |
| `toHaveJSProperty(name, value)` | JS property on the element |
| `toHaveAccessibleName(name)` | accessible name (aria-label/text) |
| `toHaveAccessibleDescription(desc)` | accessible description |
| `toHaveRole(role)` | ARIA role |

```ts
await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs');
await expect(page.locator('.nav-item')).toHaveClass(/active/);
await expect(page.getByText('Total')).toHaveCSS('font-weight', '600');
await expect(page.getByTestId('submit-btn')).toHaveRole('button');
```

### Counts & Others
| Assertion | Checks |
|---|---|
| `toHaveCount(n)` | number of matching elements |
| `toHaveScreenshot()` | pixel-perfect screenshot comparison |

```ts
await expect(page.getByRole('listitem')).toHaveCount(5);
await expect(page.locator('img')).toHaveCount(3);
await expect(page).toHaveScreenshot('home.png');          // full page
await expect(page.locator('.hero')).toHaveScreenshot();   // single element
```

---

## 2. Generic / Value Assertions (No Auto-Retry)

| Assertion | Checks |
|---|---|
| `toBe(value)` | strict equality (`===`) |
| `toEqual(value)` | deep equality (objects/arrays) |
| `toStrictEqual(value)` | deep equality incl. `undefined` props & types |
| `toBeTruthy()` / `toBeFalsy()` | truthy / falsy value |
| `toBeNull()` | value is `null` |
| `toBeDefined()` / `toBeUndefined()` | defined / `undefined` |
| `toBeNaN()` | value is `NaN` |
| `toBeInstanceOf(Class)` | `instanceof` check |
| `toContain(item)` | array contains item / string contains substring |
| `toContainEqual(item)` | array contains deep-equal object |
| `toHaveLength(n)` | array/string length |
| `toHaveProperty(name, value?)` | object has property (optional value) |
| `toMatch(regex/string)` | string matches pattern |
| `toMatchObject(obj)` | object contains the given shape (partial match) |
| `toThrow(error?)` | function call throws |
| `toBeGreaterThan(n)` | `>` |
| `toBeGreaterThanOrEqual(n)` | `>=` |
| `toBeLessThan(n)` | `<` |
| `toBeLessThanOrEqual(n)` | `<=` |
| `toBeCloseTo(n, digits?)` | floating point approx |

```ts
expect(1 + 1).toBe(2);
expect({ user: 'tom', role: 'admin' }).toEqual({ user: 'tom', role: 'admin' });
expect(['a', 'b']).toContain('a');
expect('playwright is great').toMatch(/great$/);
expect([1, 2, 3]).toHaveLength(3);
expect({ name: 'John', age: 30 }).toMatchObject({ name: 'John' });
expect(() => { throw new Error('boom'); }).toThrow('boom');
expect(order.total).toBeGreaterThan(100);
expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
```

---

## 3. Soft Assertions

Failing soft assertions don't stop the test — all failures are reported at the end.

```ts
await expect.soft(page.getByRole('heading')).toHaveText('Welcome');
await expect.soft(page.getByText('user@example.com')).toBeVisible();
// test keeps running even if the above fail
```

---

## 4. `expect.poll()` — Retry Until Condition

Polls a custom expression until it passes (useful for API/backend state):

```ts
await expect.poll(async () => {
    const resp = await request.get('/api/jobs/1');
    return resp.json().then(j => j.status);
}, { timeout: 10_000 }).toBe('completed');
```

---

## 5. `expect.toPass()` — Retry a Whole Block

Retries a set of assertions together until all pass:

```ts
await expect(async () => {
    await page.goto('/dashboard');
    await expect(page.getByText('Analytics')).toBeVisible();
    await expect(page.getByRole('table')).toHaveCount(1);
}).toPass({ timeout: 15_000, intervals: [1_000, 2_000] });
```

---

## 6. Negation (`.not`)

```ts
await expect(locator).not.toBeVisible();
await expect(locator).not.toContainText('error');
await expect(page).not.toHaveURL(/login/);
await expect.poll(...).not.toBe('pending');
```

---

## 7. Quick Decision Guide

| Want to check... | Use |
|---|---|
| Element is shown | `toBeVisible` |
| Element is gone | `toBeHidden` |
| Text content (exact) | `toHaveText` |
| Text contains substring | `toContainText` |
| Input value | `toHaveValue` |
| Checkbox selected | `toBeChecked` |
| Button enabled/disabled | `toBeEnabled` / `toBeDisabled` |
| Page title / URL | `toHaveTitle` / `toHaveURL` |
| Attribute / class / CSS | `toHaveAttribute` / `toHaveClass` / `toHaveCSS` |
| Number of matching elements | `toHaveCount` |
| API / backend state | `expect.poll` |
| Never block the test | `expect.soft` |
| One-off value/object check | `toBe` / `toEqual` / `toMatchObject` |
