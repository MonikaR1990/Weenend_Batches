import {test, expect} from '@playwright/test'

test('Screenshot 1', async({page})=>{
    await page.goto("https://letcode.in/")
    await page.screenshot({path:"E:\\letcode1.jpg", fullPage: true})
})

test('Screenshot 2', async({page})=>{
    await page.goto("https://letcode.in/")
    await page.screenshot({path:`DownloadedFiles/homeletpage.jpg`})
})

test('Screenshot 3', async({page})=>{
    await page.goto("https://letcode.in/")
    const sandBox = page.locator("//span[text()='New! Playwright Quiz Sandbox Ready']/parent::div")
    await sandBox.screenshot({path:`DownloadedFiles/sandbox.jpg`})
})

test('Screenshot4',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()

    await expect(page).toHaveTitle('Swag Labs')
})

test('Screenshot5',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()

    await expect(page).toHaveTitle('Swag Labssss')
})

test('Screenshot6',async({page})=>{

    const timeStamp = Date.now()
    console.log(timeStamp)
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()

    await page.screenshot({path:`NewDownload/test_${timeStamp}.png`})
})


