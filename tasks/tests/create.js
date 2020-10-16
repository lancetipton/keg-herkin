#!/usr/bin/env node

const { npx } = require('../helpers/process')
const { executeTask } = require('../helpers/executeTask')

const createTest = async (args) => {
  const { params } = args
  const { url, context } = params
  const resp = await npx(`qawolf create ${url} ${context}`)

  return resp
}

const create = {
  name: 'create',
  action: createTest,
  example: 'yarn test:create',
  description : 'Creates a new QAWolf test based on the passed in context and url',
  options: {
    context: {
      alias: [ 'name' ],
      description: 'Context or name of the test to be created',
      required: true,
    },
    url: {
      description: 'Url of the site there the test should be run',
      example: '--url http://my.test.site',
      required: true,
    }
  }
}

executeTask(module, create, create.name)