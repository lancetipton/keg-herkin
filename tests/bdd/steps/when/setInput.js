const { When } = require("cucumber")
const { getBrowserContext } = require('../../support/setup')
const { getPage } = getBrowserContext()

When("I set {data} to the input {selector}", async (data, selector) => {
  const page = await getPage()
  const inputSelector = `input${selector}`
  await page.click(inputSelector)
  await page.type(inputSelector, data)
})

