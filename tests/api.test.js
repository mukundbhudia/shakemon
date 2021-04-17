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

describe('Handle bad pokemon', () => {
  it(`should return error for no pokemon name`, async (done) => {
    const res = await request(server).get('/pokemon/')
    expect(res.body).toHaveProperty('msg')
    expect(res.body).toHaveProperty('code')
    expect(res.body.msg).toBe('Error: No pokemon name entered')
    expect(res.body.code).toBe(400)
    done()
  })

  it(`should return error for 'charizards'`, async (done) => {
    const res = await request(server).get('/pokemon/charizards')
    expect(res.body).toHaveProperty('msg')
    expect(res.body).toHaveProperty('code')
    expect(res.body.msg).toBe('Error: Cannot get Pokemon description from API')
    expect(res.body.code).toBe(400)
    done()
  })
})
