import { IUser } from '../domain/user'
import { IDataDatabase } from './db'

const UserMapper = {
  toEntity({ data }: IDataDatabase): IUser {
    const user = JSON.parse(data)
    return user
  },
  toDataBase(user: IUser): IDataDatabase {
    const userDatabase = { data: JSON.stringify(user) }
    return userDatabase
  },
}

export default UserMapper
