import express from 'express'
import UserController from '../../controllers/user/UserController'

export const UserRouter = express.Router({
  strict: true,
})

UserRouter.post('/', UserController.register)

UserRouter.post('/login', UserController.login)
