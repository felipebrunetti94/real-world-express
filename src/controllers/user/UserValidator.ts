import { Request } from 'express'

import { IUser } from '../../domain/user/User'

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

export interface IUserRequestData extends IUser {
  password: string
}

const UserValidator = {
  validate({ body }: Request): IUserRequestData {
    const missing = []
    if (!body.username) {
      missing.push('username')
    }
    if (!body.email) {
      missing.push('email')
    }
    if (!body.password) {
      missing.push('password')
    }
    if (missing.length > 0) {
      throw new RequiredFieldException('User')
    }
    return {
      username: body.username,
      email: body.email,
      password: body.password,
      bio: '',
      image: '',
    }
  },
}

export default UserValidator
