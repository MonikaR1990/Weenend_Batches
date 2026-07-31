import {test} from '@playwright/test'

test('GetBy Methods', async({page})=>{
    await page.goto("https://www.amazon.in/")
    // await page.getByText("Customer Service").click();
    // await page.getByText('Mobiles').click();
    await page.getByLabel('Search Amazon.in').fill("Laptop")

    await page.goto("https://www.passthenote.com/auth/login")

    await page.getByTestId("ptn-login-email-input").fill("admin@123")


    //await page.goto("https://www.google.com/")
    // // await page.getByText('How Search').click()
    // // await page.getByText('Business', {exact:true}).click()
    // await page.getByPlaceholder("Search Amazon.in").click();
    //await page.getByTitle('Search').click()


    

    // await page.getByRole('button', {name: 'Google Search'}).click()
    //await page.getByRole('link', {name: 'About'}).click();
    
    await page.goto("https://vinothqaacademy.com/demo-site/")
    await page.getByAltText('Vinoth Tech Solutions').click()
    

})

//getByText ==> Finds the elements by its Visible Text //partial match it gets
//getByRole ==> Find the elements by its role //Visible Text, aria-label, value (no use for input)
//getByPlaceHolder ==> Find the elements using placeholder text.
//getByLabel ==> Find the elements using their associated label element text
//getByAltText ==> Find the image elements using alt attribute
//getBtTitle ==> Find the element using title attribute
//getByTestId ==> Find the element using data-testid attribute