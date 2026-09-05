import {test, expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log("Start")
})

test.beforeEach(async({page})=>{
    console.log("Before Each Test")
    await page.goto('https://letcode.in/')
})

test('Testcase1', async({page})=>{
    console.log("Test Case 1")
    await expect(page).toHaveTitle('LetCode with Koushik | Software Test Automation Hub')
})

test('Testcase2', async({page})=>{
    console.log("Test Case 2")
    await expect(page).toHaveURL('https://letcode.in/')
})

test('Testcase3', async({page})=>{
    console.log("Test Case 3")
    const workspace = page.locator('#testing')  
    await expect(workspace).toBeVisible()
})

test.afterEach(async({page})=>{
    console.log("After Each Test")
    await page.screenshot({path:`screenshot/test_${Date.now()}.png`, fullPage: true})
})

test.afterAll(async()=>{
    console.log("Completed")
})

//beforeAll --> Once run before all tests in a file Global Setup (Data and enevironment setup)
//beforeEach --> runs before each test
//afterAll -->> runs after each test
//afterEach --> Once run after all tests in a file Global Setup (Final Cleanup)
