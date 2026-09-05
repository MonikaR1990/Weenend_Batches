import {test} from '@playwright/test'

test('Alert 1', async({page})=>{
    await page.goto("https://letcode.in/alert/")

    page.on('dialog', async dialog=>{
        await page.waitForTimeout(3000)
        console.log(dialog.message())
        await dialog.accept()
    })

    await page.locator('#accept').click()
})
test('Alert 2', async({page})=>{
    await page.goto("https://letcode.in/alert/")

    page.on('dialog', async dialog =>{
        await page.waitForTimeout(3000)
        console.log(dialog.message())
        await dialog.dismiss()
    })
    await page.locator('#confirm').click()
})
test('Alert 3', async({page})=>{
    await page.goto("https://letcode.in/alert/")

    page.on('dialog', async d => {
        await page.waitForTimeout(2000)
        console.log(d.message())
        await d.accept("Praveen")
    })
    await page.locator('#prompt').click()
})

/*

listen the dialog
|
click the button
|
Alert appears
|
Playwright catches it
|
accept alert  */
