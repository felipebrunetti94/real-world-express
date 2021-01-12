export interface IUserRequestData {
  username: string
  email: string
  password: string
}

export interface IUser {
  username: string
  bio: string
  image: null | string
  password: string
}

export interface IUserAuth extends IUser {
  token: string
  email: string
}

export const validate = (): null => null

export const create = (userData: IUserRequestData): IUserAuth => {
  return {
    username: userData.username,
    email: userData.email,
    token: '',
    bio: '',
    image: null,
    password: userData.password,
  }
}

export const isAuthValid = (userAuth: IUserAuth): boolean =>
  userAuth.email !== '' && userAuth.password !== ''
