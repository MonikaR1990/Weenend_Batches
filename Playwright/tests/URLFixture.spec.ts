import {test as base} from '@playwright/test'

type myUrlFixture = {
    url: string
}

export const test = base.extend<myUrlFixture>({
    url: async({}, use)=>{
      const url = "https://www.amazon.in/"
      await use(url)
    }
})