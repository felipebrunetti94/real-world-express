import express from 'express'
import bodyParser from 'body-parser'
import { UserRouter } from './routes'

const app = express()

app.use(bodyParser.json())
app.use('/api/users', UserRouter)

export default app
