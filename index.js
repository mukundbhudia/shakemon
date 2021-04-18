const { server } = require('./src/server')

const SERVER_PORT = process.env.PORT || 4000
const SERVER_ENV = process.env.NODE_ENV || 'prod'

server.listen(SERVER_PORT, () => {
  console.log(
    `Running shakemon server at http://localhost:${SERVER_PORT}/ in env: ${SERVER_ENV}`
  )
})
