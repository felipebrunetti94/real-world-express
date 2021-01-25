import app from './app'
import { PORT, HOST } from './config/constants'

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on ${HOST}:${PORT}`)
})
