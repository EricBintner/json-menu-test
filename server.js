// Vendor modules
const sassMiddleware = require('node-sass-middleware')
const path = require('path')
const express = require('express')

// Bootstrap application
const app = express()

// SCSS 
app.use(//'/style',
  sassMiddleware({
      src: path.join(__dirname, '/assets/style'), //where the sass files are 
      dest:path.join(__dirname, '/public/style'), //where css should go
      debug: true,
      prefix: '/style'
  })
)

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')))

// Load navigation
const data = require('./data/navigation')

// Serve navigation
app.get('/api/navigation', (req, res, next) => {
  res.jsonp(data)
})

module.exports = app
