import express from 'express'
import bodyParser from 'body-parser'
import { PORT, HOST } from './config/constants'
import { userRouter } from './routes'

const app = express()

app.use(bodyParser.json())
app.use('/api/users', userRouter)

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on ${HOST}:${PORT}`)
})
