import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('Deve habilitar CORS', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .send({ name: 'any_name' })
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
