const { Router } = require('express')
const controllers = require('./controllers')

const router = Router()

router.get('/', controllers.getHome)
router.get('/pokemon/', controllers.getPokemon)
router.get('/pokemon/:name', controllers.getPokemonDescription)
router.get('*', controllers.notFound)

module.exports = router
