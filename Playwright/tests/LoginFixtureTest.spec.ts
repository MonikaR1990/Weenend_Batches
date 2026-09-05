import {test} from './LoginFixture.spec.js'
import {expect} from '@playwright/test'

test('Valid Login_1', async({login})=>{
    await expect(login).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test('Valid Login_2', async({login})=>{
    await expect(login).toHaveTitle("Swag Labs")
})