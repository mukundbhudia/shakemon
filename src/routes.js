const { Router } = require('express')
const controllers = require('./controllers')

const router = Router()

router.get('/', controllers.getHome)
router.get('/pokemon/:name', controllers.getPokemonDescription)

module.exports = router
