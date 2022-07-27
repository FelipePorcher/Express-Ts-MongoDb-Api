import app from '@/main/config/app'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'
import request from 'supertest'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Deve retornar 200 no signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'teste',
          email: 'teste@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
      await request(app)
        .post('/api/signup')
        .send({
          name: 'teste',
          email: 'teste@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(403)
    })
  })

  describe('POST /login', () => {
    test('Deve retornar 200 no login', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'teste',
        email: 'teste@gmail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'teste@gmail.com',
          password: '123'
        })
        .expect(200)
    })

    test('Deve retornar 401 no login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'teste@gmail.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
