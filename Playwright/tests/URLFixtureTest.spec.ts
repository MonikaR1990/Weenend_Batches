import {test} from '../tests/URLFixture.spec.js'

test('Open Amazon', async({page, url})=>{
    await page.goto(url)
})

