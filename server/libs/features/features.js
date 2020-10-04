const path = require('path')
const glob = require('glob')
const { FeatureParser } = require('./featureParser')
const { mapToSteps } = require('./mapToSteps')
const steps = require('../steps/steps')

const loadFeatureFiles = (featuresFolder) => {
  return new Promise((res, rej) => {
    glob(path.join(featuresFolder, '**/*.feature'), {}, async (err, files=[]) => {
      err || !files
        ? rej('No feature files found in ' + featuresFolder)
        : res(files)
    })
  })
}

const parseFeatures = (featureFiles) => {
  return featureFiles.reduce(async (toResolve, file) => {
    const loaded = await toResolve
    if(!file) return loaded

    const features = await FeatureParser.getFeatures(file)

    return loaded.concat(features)
  }, Promise.resolve([]))
}

const loadFeatures = async (config, steps) => {
  const { featuresFolder } = config.editor
  const featureFiles = featuresFolder && await loadFeatureFiles(featuresFolder)
  const features = await parseFeatures(featureFiles)

  return steps
    ? mapToSteps(features, steps)
    : features
}

module.exports = {
  loadFeatures,
  loadFeatureFiles,
  mapToSteps,
  parseFeatures,
  FeatureParser
}