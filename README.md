# Learn Playwright Fundamentals

A structured, hands-on project for learning **Playwright** test automation from basics to advanced framework design.

## Project Structure

```
tests/
├── 01_Basics                 # Playwright setup & basic concepts
├── 02_first_tests            # Writing your first tests
├── 03_Locators_Commands      # Locators & built-in commands (incl. XPath tasks & VWO signup tests)
├── 04_Session_Storage        # Session & storage handling
├── 05_Allure_Reporting       # Allure report integration
├── 06_Multiple_Element_      # Working with multiple elements
├── 07_WebTables              # Web table automation
├── 08_Web_Select_Frames_Iframe  # Select dropdowns & iframes
├── 09_Frame_Iframe           # Deep-dive into iframes
├── 10_Keyboard_Hover_Drag_Drop  # Keyboard, hover & drag-and-drop
├── 11_JS_Alerts              # JavaScript alert handling
├── 12_Handle_SVG             # SVG element interaction
├── 13_Shadow_DOM             # Shadow DOM automation
├── 14_FileUpload             # File upload scenarios
├── 15_File_Download          # File download scenarios
├── 16_Scroll_toElement       # Scrolling to elements
├── 17_Expect_Assertions      # Assertions & expectations
├── 18_Test_hooks             # Before/after test hooks
├── 19_Data_Driven_Testing    # Data-driven test approaches
├── 20_Page_Object_Model      # Page Object Model pattern
├── 21_Fixture                # Playwright fixtures
├── 22_Misc_Concepts          # Miscellaneous concepts
├── 23_Advance_Framework      # Advanced framework design
└── Projects                  # End-to-end project work
```

## Tech Stack

- [Playwright](https://playwright.dev/) v1.61+
- TypeScript / JavaScript
- Node.js

## Setup

```bash
npm install
```

## Run Tests

```bash
npx playwright test
```

> Tests are matched via `tests/**/*.spec.ts` pattern. Only **Chromium** is enabled by default (Firefox and WebKit are disabled).

## Configuration

| Setting     | Value            |
|-------------|------------------|
| Headless    | `false`          |
| Screenshots | `on` (every test)|
| Video       | `on` (every test)|
| Viewport    | 1920 × 1080      |
| Trace       | on-first-retry   |

## Report

```bash
npx playwright show-report
```
