import {test, expect} from '@playwright/test'

test('Open Google Page', async({page})=>{
    await page.goto("https://www.google.com/")
    await page.locator('[name="q"]').fill("Selenium")
    await page.locator('[value="Google Search"]').first().click()
})

test('Swag Lab',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()

    await expect(page).toHaveTitle('Swag Labssss')
})