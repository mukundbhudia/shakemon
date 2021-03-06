const axios = require('axios')

const getTranslationFromAPI = async (description) => {
  try {
    const response = await axios.post(
      `https://api.funtranslations.com/translate/shakespeare`,
      { text: description }
    )

    if (
      response &&
      response.data &&
      response.data.contents &&
      response.data.contents.translated
    ) {
      const description = response.data.contents.translated
      return description.replace(/\s+/g, ' ') // Remove extra whitespace
    } else {
      throw Error('Unable to find translation description from API')
    }
  } catch (error) {
    console.error(
      `Error ${error.response.status}: ${error.response.statusText}`
    )
    return null
  }
}

module.exports = { getTranslationFromAPI }
