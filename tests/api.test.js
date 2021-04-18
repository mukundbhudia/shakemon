const request = require('supertest')
const { server } = require('../src/server')

const EXPECTED_CHARIZARD_DESCRIPTION =
  "Charizard flies 'round the sky in search of powerful opponents. 't breathes fire of such most wondrous heat yond 't melts aught. However, 't nev'r turns its fiery breath on any opponent weaker than itself."
const EXPECTED_MUK_DESCRIPTION =
  'From muk’s corse seeps a foul fluid yond gives off a nose-bendingly horrible stench. Just one drop of this pokémon’s corse fluid can turn a pool stagnant and rancid.'

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
    expect(res.body.description).toBe(EXPECTED_CHARIZARD_DESCRIPTION)
    done()
  })

  it('should return muk description', async (done) => {
    const res = await request(server).get('/pokemon/muk')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('name')
    expect(res.body).toHaveProperty('description')
    expect(res.body.name).toBe('muk')
    expect(res.body.description).toBe(EXPECTED_MUK_DESCRIPTION)
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

  it(`should return error for '%20%20%20charizard'`, async (done) => {
    const res = await request(server).get('/pokemon/%20%20%20charizard')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('name')
    expect(res.body).toHaveProperty('description')
    expect(res.body.name).toBe('charizard')
    expect(res.body.description).toBe(EXPECTED_CHARIZARD_DESCRIPTION)
    done()
  })
})
