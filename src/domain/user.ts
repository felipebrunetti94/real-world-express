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
  email: string
}

export interface IUserAuth extends IUser {
  token: string
  email: string
  username: string
  bio: string
  image: string | null
}

interface IErrorMessage {
  field: string
}

class RequiredFieldException extends Error {
  status: number

  errors: IErrorMessage[]

  constructor(...fields: string[]) {
    super(`Request missing fields: ${fields}`)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequiredFieldException)
    }
    this.errors = fields.map((field) => ({ field }))
    this.status = 422
    this.name = 'RequiredFieldException'
  }
}

export const validate = (userRequest: IUserRequestData): void => {
  if (!userRequest.username || !userRequest.email || !userRequest.password) {
    throw new RequiredFieldException('User')
  }
}

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
