import express, { Response, Request } from 'express'
import loginUser from '../../app/loginUser'
import registerUser from '../../app/registerUser'

export const userRouter = express.Router({
    strict: true
})

userRouter.post('/', (req: Request, res: Response) => {
    console.log(req)
    registerUser()
    res.end("Parece que vc deu um POST")
})

userRouter.post('/login', (req: Request, res: Response) => {
    console.log(req)
    loginUser()
    res.end("Parece que vc deu um POST")
})
