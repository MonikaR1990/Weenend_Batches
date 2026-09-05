import { test, expect } from '@playwright/test'

test('toBeVisible', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('[value = "Log in"]').click()

    let account = page.locator('.account').first()

    await expect(account).toBeVisible()
})
//Check the Exact Text (Visible Text)

test('toHaveText', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('[value = "Log in"]').click()

    await expect(page.locator('.ico-logout')).toHaveText('Log out')
})
//Check the parital Text (Visible Text)

test('toContainText', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('[value = "Log in"]').click()

    let account = page.locator('.account').first()

    await expect(account).toContainText('sonya')
})
//Check the Page URL
test('toHaveURL', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    await page.locator('.ico-login').click()
    
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login')
})
//Check the Title
test('toHaveTitle', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    await page.locator('.ico-login').click()
    
    await expect(page).toHaveTitle('Demo Web Shop. Login')
})
test('toBeEnabled', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")

    await page.locator('.ico-login').click()

    let signINMsg = page.locator('h1');

    //await expect(signINMsg).toBeVisible()
    await expect(signINMsg).toBeEnabled()
})
test('toBeDisabled', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    await page.locator('.ico-login').click()

    let signINMsg = page.locator('h1');

    //await expect(signINMsg).toBeVisible()
    await expect(signINMsg).toBeDisabled()
})
//check the current value of an input element
test('toHaveValue', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    const username = page.locator('#Email')
    await username.fill("sonya@gmail.com")
    await expect(username).toHaveValue("sonya@gmail.com")
})
test('toBeChecked', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#male').check()

    await expect(page.locator('#male')).toBeChecked()
})
test('toHaveCount', async({page})=>{
    await page.goto("https://www.saucedemo.com")
    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()

    await page.waitForURL('https://www.saucedemo.com/inventory.html')

    const products = page.locator('.inventory_item')

    await expect(products).toHaveCount(6)
})
test('toHaveAttribute', async({page})=>{
    await page.goto("https://www.saucedemo.com")
    await expect(page.locator('#user-name')).toHaveAttribute('placeholder', 'Username')

    //verify email field
    //verify password
    //verify login button
    //verify image => src = "logo.png"
    //verify hyperlink => href "/home"
})
//toHaveClass
//toBeHidden


//toBe (Genric value test, number, string, boolean)
test('toBe', async()=>{
    const total = 100
    expect(total).toBe(100)
})
test('toBe Test', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    await page.locator('.ico-login').click()
    
    const title = await page.title()
    expect(title).toBe('Demo Web Shop. Login')
    
})
//toEqual ==> Objects, Arrays
test('toEqual', async({page})=>{
    const actual = {
        id: 1,
        name: "Bala"
    }
    const expected = {
        id: 1,
        name: "Bala"
    }

    expect(actual).toEqual(expected)
})
test('toEqual Array', async({page})=>{
    const fruits = ['Apple', 'Mango', 'Orange']
    const expectedFruits = ['Apple', 'Mango', 'Orange']

    expect(fruits).toEqual(expectedFruits)
})
test('toContain', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    await page.locator('.ico-login').click()
    
    const title = await page.title()
    expect(title).toContain('Login')
})
//toMatch check string contains with regular expression
test('toMatch', async({page})=>{
    // await page.goto("https://demowebshop.tricentis.com")
    // await page.locator('.ico-login').click()
    
    // const title = await page.title()
    // expect(title).toMatch(/Login/)  //Regular Expression, Date, mail id, phone number

    const phone = 9600393318
    expect(phone.toString()).toMatch(/^\d{10}$/)
})
test('toBeTruthy', async()=>{
    // const username = "Monika"
    // expect(username).toBeTruthy()

    const id = null
    expect(id).toBeTruthy()
})
test('toBeFalsy', async()=>{
    const id = 0
    expect(id).toBeFalsy()
})