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
      let description = response.data.contents.translated
      return description
    } else {
      throw Error('Unable to find translation description from API')
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

module.exports = { getTranslationFromAPI }
