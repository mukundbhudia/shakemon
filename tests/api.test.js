const request = require('supertest')
const { server } = require('../src/server')

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

describe('Get endpoints', () => {
  it('should return OK status', async (done) => {
    const res = await request(server).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('msg')
    done()
  })
})

describe('Get given pokemon', () => {
  it('should return charizard description', async (done) => {
    const res = await request(server).get('/pokemon/charizard')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('name')
    expect(res.body).toHaveProperty('description')
    expect(res.body.name).toBe('charizard')
    expect(res.body.description).toBe(
      "Charizard flies 'round the sky in search of powerful opponents. 't breathes fire of such most wondrous heat yond 't melts aught. However, 't nev'r turns its fiery breath on any opponent weaker than itself."
    )
    done()
  })
})
