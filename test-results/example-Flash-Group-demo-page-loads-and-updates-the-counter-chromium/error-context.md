# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Flash Group demo page loads and updates the counter
- Location: tests/example.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Flash Group fintech pipeline' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Flash Group fintech pipeline' })

```

```yaml
- main:
  - paragraph: Flash Group fintech demo
  - heading "Payments that move at the speed of the deal." [level=1]
  - paragraph: "A small React surface for GitHub Actions: basic checks, visual summaries, and a Playwright pipeline that proves the site is live."
  - article:
    - text: Live route
    - strong: React + Vite
  - article:
    - text: Demo audience
    - strong: Flash Group
  - article:
    - text: Release signal
    - strong: 24 transactions
  - button "Process test transaction"
  - paragraph: "Transactions processed: 24"
  - complementary "Pipeline notes":
    - text: Basic pipeline
    - strong: Echo success in Actions
    - text: Visual pipeline
    - strong: Readable step summary
    - text: Playwright pipeline
    - strong: Screenshot + report artifact
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('Flash Group demo page loads and updates the counter', async ({ page }) => {
  4  |   await page.goto('/')
  5  | 
  6  |   await expect(
  7  |     page.getByRole('heading', { name: 'Flash Group fintech pipeline' }),
> 8  |   ).toBeVisible()
     |     ^ Error: expect(locator).toBeVisible() failed
  9  |   await expect(
  10 |     page.getByText('A small React surface for CI demos'),
  11 |   ).toBeVisible()
  12 | 
  13 |   const transactionButton = page.getByRole('button', {
  14 |     name: 'Process test transaction',
  15 |   })
  16 |   await expect(transactionButton).toBeVisible()
  17 | 
  18 |   await transactionButton.click()
  19 |   await expect(page.getByText('Transactions processed: 25')).toBeVisible()
  20 | 
  21 |   await page.screenshot({ path: 'test-results/flash-group-home.png', fullPage: true })
  22 | })
  23 | 
```