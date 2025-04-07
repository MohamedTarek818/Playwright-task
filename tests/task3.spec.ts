import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('lo');
  await page.getByRole('link', { name: 'Locating elements Locators' }).click();
  await page.getByRole('link', { name: 'Installation' }).click();
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.getByText('Node.jsNode.jsPythonJava.NET').click();
  await page.getByRole('link', { name: 'Java' }).click();
  await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('b');
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('br');
  await page.getByRole('link', { name: 'Install browsers Browsers' }).click();
});