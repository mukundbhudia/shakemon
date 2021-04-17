const axios = require('axios')

const removeNonPrintableAsciiChars = (string) => {
  return string.toString().replace(/[^\x20-\x7E]/g, ' ')
}

const getPokemonDescriptionFromAPI = async (pokemonName) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
    )

    if (
      response &&
      response.data &&
      response.data.flavor_text_entries &&
      response.data.flavor_text_entries.length > 6 &&
      response.data.flavor_text_entries[6].flavor_text
    ) {
      let description = removeNonPrintableAsciiChars(
        response.data.flavor_text_entries[6].flavor_text
      )
      return description
    } else {
      throw Error('Unable to find pokemon description from API')
    }
  } catch (error) {
    console.error(
      `Error ${error.response.status}: ${error.response.statusText}`
    )
    return null
  }
}

module.exports = { getPokemonDescriptionFromAPI }
