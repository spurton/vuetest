'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const apiKeys = require('./.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  NYTIMES_API_KEY: JSON.stringify(apiKeys.NYTIMES)
})
