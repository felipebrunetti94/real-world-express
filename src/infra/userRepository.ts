import db from './db'
import { IUser } from '../domain/user'
import UserMapper from './userMapper'
import Auth from './auth'

export const register = async (user: IUser): Promise<string> => {
  const hash = await Auth.hashPassword(user.password)
  const userDatabase = UserMapper.toDataBase({ ...user, password: hash })
  const userID = db.insert(userDatabase)
  return userID
}
