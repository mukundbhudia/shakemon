const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const server = express()
server.use(cors()).use(routes)

module.exports = { server }
