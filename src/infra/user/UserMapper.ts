import { IUser } from '../../domain/user/User'
import { IDataDatabase } from '../db'

export interface IUserDB extends IUser {
  password: string
}

const UserMapper = {
  toEntity({ data }: IDataDatabase): IUser {
    const user = JSON.parse(data)
    return user
  },
  toDataBase(user: IUser, password: string): IDataDatabase {
    const userDatabase = { data: JSON.stringify({ ...user, password }) }
    return userDatabase
  },
}

export default UserMapper
