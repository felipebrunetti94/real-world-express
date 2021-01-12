import bcrypt from 'bcrypt'

const rounds = 10

const auth = {
  hashPassword: async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(rounds)
    const hash = await bcrypt.hash(password, salt)
    return hash
  },
}

export default auth
