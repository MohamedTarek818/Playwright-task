import { test, expect } from '@playwright/test';


test('automate a form submission and validate success message', async ({ page }) => {
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.getByText("Text input").fill("John Doe")
    await page.locator("//input[@name='my-password']").fill("securePass123");
    await page.getByText("Textarea").fill("This is a test message");
    await page.selectOption("//select[@name='my-select']", { value: '2' });
    await page.getByText("Default checkbox").check();
    await page.getByText("Default radio").check();
    await page.locator("//input[@name = 'my-date']").fill("03/22/2025");
    await page.locator("//button[@type= 'submit']").click();

    const successMessage = page.locator("//h1[@class='display-6']");
    await expect.soft(successMessage).toHaveText('Form submitted');

    console.log('Page Title is:', await page.title());
    
    // await page.pause();
  });
    
    
   


    
    
  
    
