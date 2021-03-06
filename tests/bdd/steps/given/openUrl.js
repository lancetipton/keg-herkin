const { Given } = require("cucumber")
const { getBrowserContext } = require('../../support/setup')
const { getPage } = getBrowserContext()

Given("I open the site {site}", async site => {
  const page = await getPage()
  await page.goto(site)
})
