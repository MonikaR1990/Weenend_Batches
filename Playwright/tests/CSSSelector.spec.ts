import {test} from '@playwright/test'

test('CSS Selectors', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#name').fill("Monika")
    await page.locator('.form-control').nth(1).fill("R")
    await page.locator('[placeholder="Enter Phone"]').fill("6786767678")
    await page.locator('button').first().click()
    await page.locator('[name="start"][class="start"]').click()
    await page.locator('button[name="start"][class="start"]').click()
    await page.locator('[class*="search-input"]').click()
    await page.locator('[class^="wikipedia-search"]').click()
    await page.locator('[class$="search-input"]').click()
    await page.locator('.form-group label').click()
    await page.locator('.dropdown>button').click()
    await page.locator('label+input').click()
    await page.locator('label~input').click()
    await page.locator('text=Data Entry Form').click()



})

//1. id  --> #
//2. class --> .
//3. Other attributes = [attributename = "value"]  or [name="start"][class="start"]
//4. Multiple Attribute Selector .form-control#name
//tag Name
//contains attribute [attribute*="partial value"]
//starts with [attribute^="partial value"]
//Ends with [attribute$="partial value"]
//Descendant Selector (Space)
//Direct Child Selector (>)
//Adjacent Siblings (+)
//General Siblings (~)
//nth-child() //li:nth-child(2)
//first-child //li:first-child
//last-child //li:last-child

//Visible Test
//1. text=Login
//2. a:has-text("Data Entry Form")


// <div >
//     <h2>Login</h2>
//     <p>Error</p>       h2 + p
//     <p>Invalid</p>     h2 ~ p
//     <span>Help</span>
// </div>
