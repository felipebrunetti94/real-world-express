import request from 'supertest'
import app from '../src/app'

describe('API :: POST /api/users', () => {
  describe('when req is valid', () => {
    it('returns 201 and new user', () => {
      const data = {
        username: 'admin',
        password: '12345',
        email: 'admin@login.com',
      }
      return request(app)
        .post('/api/users')
        .send(data)
        .then((response) => {
          expect(response.status).toBe(201)
          expect(response.body).toEqual(
            expect.objectContaining({
              username: 'admin',
              email: 'admin@login.com',
              bio: '',
              image: null,
              token: expect.any(String),
            }),
          )
        })
    })
  })
})
