export const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000
export const HOST = process.env.HOST || '127.0.0.1'
export const HASH_ROUNDS = process.env.HASH_ROUNDS
  ? parseInt(process.env.HASH_ROUNDS, 10)
  : 1
export const SECRET = process.env.SECRET || 'secret'
export const JWT_TIMER = 300
