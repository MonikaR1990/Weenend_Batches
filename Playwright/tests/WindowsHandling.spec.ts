import {test, expect, type Page} from '@playwright/test'

test('Window Handle1', async({page})=>{
    await page.goto("https://letcode.in/window")

    //Promise.all ==> used to handle multiple asynchronous process and you want to all completed
    //page.waitForEvent('popup') ==> Wait until the current page opens a popup/new tab
    const [newPage] = await Promise.all([                //[newPage]
        page.waitForEvent('popup'), //newpage
        page.locator('#home').click() //clickResut
    ])

    const currentURL = newPage.url()
    console.log(currentURL)

    await newPage.getByPlaceholder('Search practice labs...').fill("Selenium")
    await newPage.waitForTimeout(2000);

    const mainURL =  page.url()
    console.log(mainURL)

    await page.locator('#testing').click()
})


// await page.locator('#home').click()
// await page.waitForEvent('pop')

// const fruits = ["Apple","Orange", "Mango"]

// const [f1] = fruits
test('Multiple Windows Handling', async({page, context})=>{
    await page.goto("https://letcode.in/window")

    await Promise.all([
        context.waitForEvent('page'),
        context.waitForEvent('page'),
        page.locator('#multi').click()
    ])
    

    let alertPage: Page | undefined
    let dropDownPage: Page | undefined;

    for(const p of context.pages())
    {
        //console.log(await p.title())
        //console.log(await p.url())
        await p.waitForLoadState('domcontentloaded')
        if(p.url().includes('/alert'))
        {
            alertPage = p
            await alertPage.bringToFront()
            console.log(await alertPage.title()) 
            //await alertPage!.locator('#accept').click()
            await alertPage.getByText('Contact').first().click()
            await alertPage!.waitForTimeout(6000)
        }
        if(p.url().includes('/dropdowns'))
        {
            dropDownPage = p
            console.log(await dropDownPage.title())
            await dropDownPage.bringToFront()
            await dropDownPage.locator('#fruits').selectOption('1')
            await dropDownPage.waitForTimeout(5000);
        }
    }  
   

    //await expect(dropDownPage!.locator('h1')).toHaveText('Dropdown')
})



//pages() ==> Returns all open pages in the context.
//title() ==> current page title
//Typescript ==> ! not null assertion

