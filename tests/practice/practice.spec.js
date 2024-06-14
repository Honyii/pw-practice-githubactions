// const {test, expect}   = require('@playwright/test')


// // test('basic test', async ({ page }) => {
// //     // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
// //     // const name = await page.innerText('.navbar__title');
// //     // expect(name).toBe('Playwright');
// //   });
// test('it logs in orangehrm and perform tasks', async ({ page })=> {
    
//     await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
//     await expect(page.locator('label[for="username"]')).toBeVisible()
//     await page.locator('input[name="username"]').fill('rahulshettyacademy')
//     await expect(page.locator('label[for="password"]')).toBeVisible()
//     await page.locator('input[name="password"]').fill('learning')
//     await page.locator('input[value="user"]').click()
//     // await page.locator('select').selectOption('Teacher')
//     // await page.locator('.termsText').check()
//     await page.getByRole('button', { name: 'Sign In' }).click()
//     // await page.locator('#signInBtn').click({force: true})
//     await page.getByRole('button', { name: 'Okay' }).click()
//     await expect(page.locator('h1')).toHaveText('Shop Name')
//     await page.pause()
//     // await page.locator('.card-title').toHavetext('iphone X', 'Samsung Note 8')
//     // 1) <input type="radio" name="radio" value="admin" id="user…/> aka getByLabel('Admin')
//     // 2) <input type="radio" value="user" name="radio" id="usert…/> aka getByLabel('User', { exact: true })
//     // await page.getByRole('button', {name: ' Login '}).click()
// })