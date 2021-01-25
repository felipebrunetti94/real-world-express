import { Request, Response } from 'express'
import User from '../domain/user'
import UserRepository from '../infra/userRepository'
import Auth from '../infra/auth'

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = req.body
    User.validateRegister(userData)
    const userID = await UserRepository.register(userData)
    const token = Auth.getToken(userID)
    const user = User.create(userData, token)
    res.setHeader('content-type', 'application/json; charset=utf-8')
    res.status(201).end(JSON.stringify(user))
  } catch (error) {
    res.end('There is been a problem with yout request')
  }
}
