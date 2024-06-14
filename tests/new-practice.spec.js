const { expect, test } = require('@playwright/test');

test('it tests swag labs', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('#login_credentials > h4')).toContainText('Accepted usernames are: ');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('#login-button').click();
  await page.waitForSelector('.inventory_item_name');
  const backPack = page.locator('.inventory_item_name').first();
  await expect(backPack).toBeVisible();
  await page.locator('.btn_inventory').first().click()
  const buttonRemove = await page.locator('.btn_inventory').first()
  await expect(buttonRemove).toHaveText('Remove')
  await page.locator('.shopping_cart_link').click()
  await page.waitForSelector('.cart_desc_label')
  await expect(page.locator('.cart_desc_label')).toBeVisible()
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack')
  await page.locator('.checkout_button').click()
  await page.waitForSelector('[data-test="firstName"]')
  await expect(page.locator('[data-test="firstName"]')).toBeVisible()
  await page.locator('input[value="Continue"]').click()
  await expect(page.locator('[data-test="error"]')).toContainText('First Name is required')
  await page.locator('[data-test="firstName"]').fill('amech')
  await page.locator('[data-test="lastName"]').fill('nony')
  await page.locator('[data-test="postalCode"]').fill('34545')
  await page.locator('input[value="Continue"]').click()
  await page.waitForSelector('.summary_info_label')
  await expect(page.locator('.summary_info')).toBeVisible()
  await page.locator('.cart_button').click()
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!')
})
