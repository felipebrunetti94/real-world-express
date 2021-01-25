export interface IUser {
  username: string
  email: string
  bio: string
  image: string | null
}

export interface IUserRequestData extends IUser {
  password: string
}

export interface IUserAuth extends IUser {
  token: string
}

export interface IUserDB extends IUser {
  password: string
  id: string
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

export const validateRegister = (userRequest: IUserRequestData): void => {
  if (!userRequest.username || !userRequest.email || !userRequest.password) {
    throw new RequiredFieldException('User')
  }
}

export const create = (
  userData: IUserRequestData,
  token: string,
): IUserAuth => {
  return {
    username: userData.username,
    email: userData.email,
    bio: userData.bio || '',
    image: userData.image || null,
    token,
  }
}

export default {
  create,
  validateRegister,
}
