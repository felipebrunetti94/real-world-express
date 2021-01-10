import * as db from './db'
import { IUser } from '../domain/user'

export const register = (user: IUser): void => {
  const stringUser = JSON.stringify(user)
  db.insert(stringUser)
}
