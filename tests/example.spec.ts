import { test, expect } from '@playwright/test'

test('Flash Group demo page loads and updates the counter', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'Flash Group fintech pipeline' }),
  ).toBeVisible()
  await expect(
    page.getByText('A small React surface for CI demos'),
  ).toBeVisible()

  const transactionButton = page.getByRole('button', {
    name: 'Process test transaction',
  })
  await expect(transactionButton).toBeVisible()

  await transactionButton.click()
  await expect(page.getByText('Transactions processed: 25')).toBeVisible()

  await page.screenshot({ path: 'test-results/flash-group-home.png', fullPage: true })
})
