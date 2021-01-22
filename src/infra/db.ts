import { promises as fs } from 'fs'
import path from 'path'

const dbPath = path.normalize(`${__dirname}/../../db/users.txt`)

export interface IDataDatabase {
  data: string
}

const db = {
  insert({ data }: IDataDatabase): string {
    fs.appendFile(dbPath, data)
    const id = new Date().toISOString()
    return id
  },
}

export default db
