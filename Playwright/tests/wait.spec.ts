import {test, expect} from '@playwright/test'

//Auto wait biggest advantage

//1. Auto Wait
//2. waitFor() ==> wait until the element reaches the particular condition
//3. waitForSelector() ==> wait until the element reaches the particular condition
//4. waitForLoadState() ==> wait untill the page reaches a particular loading state

test('waitFor', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    const loginLink =  page.locator('.ico-login')
    await loginLink.waitFor({state: 'visible', timeout: 50000})
    await loginLink.click()  
})
test('waitForSelector', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    await page.waitForSelector('.ico-login', {state: 'attached'})
    await page.click('.ico-login')
})
test('waitForLoadState', async({page})=>{
    await page.goto("https://www.saucedemo.com")

    await page.waitForLoadState('load')
    await page.waitForLoadState('domcontentloaded')

    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()

    //3 states
    //1. load - Entire Page loaded (HTML laoded, CSS loaded, Script loaded, Videos, animatations..)
    //2. documentloaded - (HTML document complete parsed)//Fater than loaded
    //3. networkIdle - Real time spa (react, angular, etc.,)
    //networkidle communication between browser and server
    //idle = no activity/stop
})

/* 
    'load' state test Has the Page loaded?

    HTML loaded
    CSS Loaded
    Script Loaded
    Images

    continue Test

    'networlIdle' Has the page finished getting data from server?

    HTML loaded
    CSS Loaded
    Script Loaded
    Images
    API data
    Server communication stopped

    continue Test

*/
//wait untill navigation is completed and the browser reaches the expected page URL(full url, url pattern )
test('waitForURL', async({page})=>{
        await page.goto("https://www.saucedemo.com")
        await page.locator('#user-name').fill("standard_user")
        await page.locator('#password').fill("secret_sauce")
        await page.locator('#login-button').click()
    
        await page.waitForURL(/inventory.html/) //wait for the url change after dash board reached we continue test
    
        const products = page.locator('.inventory_item')
    
        await expect(products).toHaveCount(6)    
})

//wait for specfic events to happen before continue the test 
//new tab open
//popup appears
//Dialog box
//File Download
test('waitForEvent', async({page})=>{

})
//waitForRequest
//waitForResponse

test('waitForTimeOut', async({page})=>{
        await page.goto("https://www.saucedemo.com")
        await page.locator('#user-name').fill("standard_user")
        await page.locator('#password').fill("secret_sauce")
        await page.locator('#login-button').click()
    
        await page.waitForURL(/inventory.html/) //wait for the url change after dash board reached we continue test
    
        const products = page.locator('.inventory_item')
    
        await expect(products).toHaveCount(6)  

        //await page.waitForTimeout(5000)
})
