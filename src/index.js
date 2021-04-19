const { server } = require('../src/server')

const SERVER_PORT = process.env.PORT || 4000

server.listen(SERVER_PORT, () => {
  console.log(`Running shakemon server at http://localhost:${SERVER_PORT}/.`)
})
