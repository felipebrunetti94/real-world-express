import db from '../db'
import UserMapper from './UserMapper'
import Auth from '../auth/Auth'
import { IUserRequestData } from '../../controllers/user/UserValidator'
import { IUser } from '../../domain/user/User'

export const register = async (userData: IUserRequestData): Promise<IUser> => {
  const { password, ...user } = userData
  const hash = await Auth.hashPassword(password)
  const userDatabase = UserMapper.toDataBase(userData, hash)
  db.insert(userDatabase)
  return user
}

export default {
  register,
}
