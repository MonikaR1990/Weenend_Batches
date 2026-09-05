import {test} from '@playwright/test'

test("Date Picker 1", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#datepicker').click()
    await page.locator('#datepicker').fill("09/09/2009")
    await page.waitForTimeout(5000)
})

test("Date Picker 2", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#txtDate').click()

    await page.locator('.ui-datepicker-month').selectOption('4')
    await page.locator('.ui-datepicker-year').selectOption('2023')

    await page.locator('[data-date="2"]').click()
})


