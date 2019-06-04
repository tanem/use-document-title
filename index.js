'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./use-document-title.cjs.production.js')
} else {
  module.exports = require('./use-document-title.cjs.development.js')
}
