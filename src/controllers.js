const { getPokemonDescriptionFromAPI } = require('./modules/pokemonAPI')
const { getTranslationFromAPI } = require('./modules/shakespeareTranslatorAPI')

const getHome = (req, res) => {
  const now = new Date()
  res.json({
    msg: `Welcome to the shakemon API!`,
    startTime: now,
  })
}

const getPokemonDescription = async (req, res) => {
  if (req && req.params && req.params.name) {
    const name = req.params.name
    const pokemonDesc = await getPokemonDescriptionFromAPI(name)
    // const description = await getTranslationFromAPI(pokemonDesc)
    const description = pokemonDesc // TODO: test, please remove later
    console.debug(description)
    res.json({
      name,
      description,
    })
  } else {
    res.status(400).json({
      msg: `No pokemon name entered`,
    })
  }
}

module.exports = { getHome, getPokemonDescription }
