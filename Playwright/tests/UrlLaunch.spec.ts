import {test} from '@playwright/test'

test('Open Google Page', async({page})=>{
    await page.goto("https://www.google.com/")
    await page.locator('[name="q"]').fill("Selenium")
    await page.locator('[value="Google Search"]').first().click()
})


//CSS Selector
//1. id
//2. 