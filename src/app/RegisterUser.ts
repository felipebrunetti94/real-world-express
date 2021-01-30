import { IUserRequestData } from '../controllers/user/UserValidator'
import UserRepository from '../infra/user/UserRepository'
import CreateAuth, { IUserAuth } from '../infra/auth/CreateAuth'

export default async (userData: IUserRequestData): Promise<IUserAuth> => {
  const user = await UserRepository.register(userData)
  const userAuth = CreateAuth.for(user)
  return userAuth
}
