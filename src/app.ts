import express from 'express'
import bodyParser from 'body-parser'
import { userRouter } from './routes'

const app = express()

app.use(bodyParser.json())
app.use('/api/users', userRouter)

export default app