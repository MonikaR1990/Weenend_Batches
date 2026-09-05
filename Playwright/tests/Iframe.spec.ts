import {test} from '@playwright/test'

test('Frame Locators', async({page})=>{
    await page.goto("https://letcode.in/frame")
    await page.locator('[name="fname"]').fill("Bala")
    await page.locator('[name="lname"]').fill("G")
})