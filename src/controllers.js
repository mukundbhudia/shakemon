const { getPokemonDescriptionFromAPI } = require('./services/pokemon')
const { getTranslationFromAPI } = require('./services/shakespeareTranslator')

const sendError = (res, httpCode, message) => {
  res.status(httpCode).json({
    msg: message,
    code: httpCode,
  })
}

const notFound = (req, res) => {
  sendError(res, 404, 'Error: path not found')
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

const getPokemonDescription = async (req, res, next) => {
  if (!req || !req.params || !req.params.name) {
    sendError(res, 400, 'Error: No pokemon name entered')
    return
  }
  const name = req.params.name.trim()
  let pokemonDescription = null
  let description = null

  try {
    pokemonDescription = await getPokemonDescriptionFromAPI(name)
  } catch (error) {
    next(error)
    return
  }

  try {
    description =
      pokemonDescription && (await getTranslationFromAPI(pokemonDescription))
  } catch (error) {
    next(error)
    return
  }

  if (description) {
    res.json({
      name,
      description,
    })
  } else {
    sendError(
      res,
      400,
      'Error: Cannot get and/or translate description from API'
    )
  }
}

module.exports = { getHome, getPokemon, getPokemonDescription, notFound }
