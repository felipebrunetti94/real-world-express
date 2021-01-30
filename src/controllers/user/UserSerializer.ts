import { IUserAuth } from '../../infra/auth/CreateAuth'

const UserSerializer = {
  serialize(userAuth: IUserAuth): string {
    return JSON.stringify(userAuth)
  },
}

export default UserSerializer
