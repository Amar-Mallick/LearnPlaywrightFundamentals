# Playwright Keyboard Actions Cheat Sheet

## `page.keyboard` Methods

| Method | Description |
|--------|-------------|
| `page.keyboard.press(key)` | Press a single key (e.g. `'Enter'`, `'Tab'`) |
| `page.keyboard.down(key)` | Hold a key down |
| `page.keyboard.up(key)` | Release a key |
| `page.keyboard.insertText(text)` | Insert text (bypasses keypress, fires `input` event) |
| `page.keyboard.type(text)` | Type text character by character (slower, fires key events) |

## Common Key Names

| Key | Name |
|-----|------|
| Enter | `'Enter'` |
| Tab | `'Tab'` |
| Escape | `'Escape'` |
| Backspace | `'Backspace'` |
| Delete | `'Delete'` |
| Space | `' '` or `'Space'` |
| Arrow Up | `'ArrowUp'` |
| Arrow Down | `'ArrowDown'` |
| Arrow Left | `'ArrowLeft'` |
| Arrow Right | `'ArrowRight'` |
| Home | `'Home'` |
| End | `'End'` |
| Page Up | `'PageUp'` |
| Page Down | `'PageDown'` |
| Control | `'Control'` |
| Shift | `'Shift'` |
| Alt | `'Alt'` |
| Meta (Win/Cmd) | `'Meta'` |
| CapsLock | `'CapsLock'` |
| F1 – F12 | `'F1'` … `'F12'` |

## Modifier + Key Combinations

```ts
// Hold modifiers, then press a key
await page.keyboard.press('Control+A')       // Select all
await page.keyboard.press('Control+C')       // Copy
await page.keyboard.press('Control+V')       // Paste
await page.keyboard.press('Control+X')       // Cut
await page.keyboard.press('Control+Z')       // Undo
await page.keyboard.press('Control+Shift+I') // DevTools
await page.keyboard.press('Alt+Tab')         // Switch window
```

## Manual Modifier Control

```ts
await page.keyboard.down('Shift')
await page.click('text=Item')
await page.keyboard.up('Shift')              // Shift+click
```

## Typing Text

```ts
await page.keyboard.type('Hello World')      // Fires keydown, keypress, input, keyup per char
await page.keyboard.insertText('Hello')      // Fires input only (faster, used for IME)
```

## locator.press() – Direct on Elements

```ts
await page.locator('input').press('Enter')
await page.locator('input').press('Backspace')
await page.locator('input').press('Control+A')
```

## Fill vs Type vs InsertText

| Method | Use Case |
|--------|----------|
| `locator.fill('text')` | **Preferred** – clears field, fires input event, fastest |
| `locator.pressSequentially('text')` | Type char by char on a locator |
| `page.keyboard.type('text')` | Type char by char on focused element |
| `page.keyboard.insertText('text')` | Insert text bypassing key events (IME) |

## Special Shortcut: Select All + Delete

```ts
await page.locator('input').press('Control+A')
await page.keyboard.press('Backspace')
// or
await page.locator('input').fill('')          // simpler
```

## Notes

- `press()` accepts modifiers joined by `+`: `'Shift+Enter'`, `'Control+Alt+Delete'`
- `down()`/`up()` are useful for drag-and-drop or multi-key combinations
- Always prefer `locator.fill()` over keyboard typing for text inputs
