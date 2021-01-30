import { IUser } from '../../domain/user/User'
import Auth from './Auth'

export interface IUserAuth extends IUser {
  token: string
}

const CreateAuth = {
  for: async ({ bio, image, username, email }: IUser): Promise<IUserAuth> => {
    const token = Auth.getToken(username)
    return { bio, image, username, email, token }
  },
}

export default CreateAuth
