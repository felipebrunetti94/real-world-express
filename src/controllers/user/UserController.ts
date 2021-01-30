import { Response, Request } from 'express'
import UserSerializer from './UserSerializer'
import UserValidator from './UserValidator'
import RegiterUser from '../../app/RegisterUser'
import HTTP_STATUS from '../httpStatus'

const userController = {
  register: async (req: Request, res: Response): Promise<void> => {
    try {
      const validUser = UserValidator.validate(req)

      const user = await RegiterUser(validUser)

      const serializedUser = UserSerializer.serialize(user)

      res.status(HTTP_STATUS.SUCCESS).end(serializedUser)
    } catch (error) {
      if (!error.status) {
        error.status = HTTP_STATUS.UNKNOWN_ERROR
      }
      res.status(error.status).end(error.message)
    }
  },
  login(req: Request, res: Response) {},
}

export default userController
