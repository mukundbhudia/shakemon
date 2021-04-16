const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { logger } = require('./modules/logger')

const SERVER_PORT = process.env.PORT || 4000

const app = express()

const startServer = async () => {
  app
    .use(cors())
    .get('/', (req, res) => {
      const now = new Date()
      res.json({
        msg: `Welcome to the shakemon API!`,
        startTime: now,
      })
    })
    .listen(SERVER_PORT)

  const welcomeMessage = `Running shakemon server at http://localhost:${SERVER_PORT}/ in env: ${process.env.NODE_ENV}`
  console.log(welcomeMessage)
  logger.info(welcomeMessage)
}

startServer()
