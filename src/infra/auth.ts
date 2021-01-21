import bcrypt from 'bcrypt'
import { HASH_ROUNDS } from '../config/constants'

const Auth = {
  hashPassword: async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(HASH_ROUNDS)
    const hash = await bcrypt.hash(password, salt)
    return hash
  },
}

export default Auth
