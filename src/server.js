const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const errorHandler = (err, _req, res, _next) => {
  res.status(500).json({
    error: err.message,
    info: err.stack,
  })
}

const server = express()
server.use(cors()).use(routes).use(errorHandler)

module.exports = { server }
