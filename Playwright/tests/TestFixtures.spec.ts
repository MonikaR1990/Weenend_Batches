import {chromium, test} from '@playwright/test'

//page fixture ==> automatically open browser application, browser session create (context), every tab open a page
//
test('Fixtures_1', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto("https://www.amazon.in/")
})

test('Fixtures_2', async({context})=>{
    const page = await context.newPage()
    await page.goto("https://www.amazon.in/")
})

test('Fixtures_3', async({page, browserName})=>{
    await page.goto("https://www.amazon.in/")
    console.log(browserName)
})

//page ==> browser tab/page
//context ==> browser session
//browser ==> Browser Instance
//request ==> API request Object
//browserName ==> Name of browser


// const browser = await chromium.launch()
// const context = await browser.newContext();
// const page = await context.newPage()
// await page.goto("https://www.amazon.in/")

test('Two User Login', async({browser})=>{
    const context1 = await browser.newContext()
    const context2 = await browser.newContext()

    const user1 = await context1.newPage()
    const user2 = await context2.newPage()

    await user1.goto("https://www.saucedemo.com/")
    await user1.locator('#user-name').fill('standard_user')
    await user1.locator('#password').fill('secret_sauce')
    await user1.locator('#login-button').click()
    await user1.waitForTimeout(5000)


    await user2.goto("https://www.saucedemo.com/")
    await user2.locator('#user-name').fill('locked_out_user')
    await user2.locator('#password').fill('secret_sauce')
    await user2.locator('#login-button').click()
    await user1.waitForTimeout(5000)

})