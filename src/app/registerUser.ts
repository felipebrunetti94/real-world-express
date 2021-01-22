import { Request, Response } from 'express'
import * as User from '../domain/user'
import * as userRepository from '../infra/userRepository'
import Auth from '../infra/auth'

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = req.body
    User.validate(userData)
    const userID = await userRepository.register(userData)
    const token = Auth.getToken(userID)
    const userAuth = { ...userData, token, bio: '', image: null }
    res.setHeader('content-type', 'application/json; charset=utf-8')
    res.end(JSON.stringify(userAuth))
  } catch (error) {
    res.end('There is been a problem with yout request')
  }
}
