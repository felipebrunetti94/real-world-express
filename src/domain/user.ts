interface IUserAuth {
    email: String
    password: String
}

const isAuthValid = (userAuth: IUserAuth): Boolean => 
    userAuth.email !== '' && userAuth.password !== ''
