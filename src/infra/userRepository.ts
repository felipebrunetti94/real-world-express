import db from './db'
import { IUser } from '../domain/user'
import UserMapper from './userMapper'
import auth from './auth'

export const register = async (user: IUser): Promise<void> => {
  const hash = await auth.hashPassword(user.password)
  const userDatabase = UserMapper.toDataBase({ ...user, password: hash })
  db.insert(userDatabase)
}
