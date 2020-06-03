const express = require('express')
const server = express()
const path = require('path')
const API_Router = require('./api/API_Router')
const deployment = require('./api/deployment.js')
const PORT = 3000

// Action to be performed for all requests.
server.use((req, res, next) => {
    // action
    next()
})

// Serve static site files.
server.use(express.static(path.join(__dirname, './build')))

// Process API requests.
server.use(API_Router)

// Automate deployment using github webhooks.
server.use(deployment);

// Handle any requests that don't match the ones above.
server.get('*', ( _, res ) => res.sendStatus(404))

server.listen(PORT)
console.log(`Server started on port ${PORT}.`)





