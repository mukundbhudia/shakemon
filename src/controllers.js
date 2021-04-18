const { getPokemonDescriptionFromAPI } = require('./services/pokemon')
const { getTranslationFromAPI } = require('./services/shakespeareTranslator')

const sendError = (res, httpCode, message) => {
  return res.status(httpCode).json({
    msg: message,
    code: httpCode,
  })
}

const getHome = (req, res) => {
  const now = new Date()
  res.json({
    msg: `Welcome to the shakemon API!`,
    startTime: now,
  })
}

const getPokemon = (req, res) => {
  sendError(res, 400, 'Error: No pokemon name entered')
}

const getPokemonDescription = async (req, res) => {
  if (req && req.params && req.params.name) {
    const name = req.params.name.trim()
    const pokemonDescription = await getPokemonDescriptionFromAPI(name)
    if (pokemonDescription) {
      const description = await getTranslationFromAPI(pokemonDescription)
      if (description) {
        res.json({
          name,
          description,
        })
      } else {
        sendError(res, 400, 'Error: Cannot translate description from API')
      }
    } else {
      sendError(res, 400, 'Error: Cannot get Pokemon description from API')
    }
  } else {
    sendError(res, 400, 'Error: No pokemon name entered')
  }
}

module.exports = { getHome, getPokemon, getPokemonDescription }
