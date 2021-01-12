import { Request, Response } from 'express'
import * as User from '../domain/user'
import * as userRepository from '../infra/userRepository'

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = req.body
    const user = User.create(userData)
    await userRepository.register(user)
    res.end(`user: ${user.username} saved with success`)
  } catch (error) {
    res.end('There is been a problem with yout request')
  }
}
