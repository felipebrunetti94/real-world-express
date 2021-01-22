import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { HASH_ROUNDS, SECRET, JWT_TIMER } from '../config/constants'

const Auth = {
  hashPassword: async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(HASH_ROUNDS)
    const hash = await bcrypt.hash(password, salt)
    return hash
  },
  getToken: (id: string): string => {
    const token = jwt.sign({ id }, SECRET, { expiresIn: JWT_TIMER })
    return token
  },
}

export default Auth
