import { promises as fs } from 'fs'
import path from 'path'

const dbPath = path.normalize(`${__dirname}/../../db/users.txt`)

export const insert = (data: string): void => {
  console.log(data)
  fs.appendFile(dbPath, data)
}
