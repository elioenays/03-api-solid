import { FastifyInstance } from 'fastify'
import { authenticate } from './authenticate'
import { register } from './register'
import { verifyJWT } from '../../../middlewares/verify-jwt'
import { profile } from './profile'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
