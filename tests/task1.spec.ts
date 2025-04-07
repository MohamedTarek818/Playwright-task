import { test, expect } from '@playwright/test';

test('navigate and Button click', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com');
    // await page.locator("//a[@href='/abtest']").click();
    await page.getByText("A/B Testing").click();
    await expect.soft(page).toHaveTitle('A/B Test');
    await page.goBack(); 
    await expect.soft(page).toHaveTitle('The Internet');
    console.log('Page Title after going back:', await page.title());

    //  await page.pause();
     
  });

