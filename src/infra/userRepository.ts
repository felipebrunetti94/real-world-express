import db from './db'
import { IUser } from '../domain/user'
import UserMapper from './userMapper'

export const register = (user: IUser): void => {
  const userDatabase = UserMapper.toDataBase(user)
  db.insert(userDatabase)
}
