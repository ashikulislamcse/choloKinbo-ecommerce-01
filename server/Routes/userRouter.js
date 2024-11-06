import express from 'express'
import { AdminLogin, GetUsers, RemoveUser, UpdateUser, UserLogin, UserRegister } from '../controllers/usercontroller.js';

const userRouter = express.Router();

userRouter.post('/register',UserRegister)
userRouter.post('/login',UserLogin)
userRouter.post('/admin',AdminLogin)
userRouter.post('/remove',RemoveUser)
userRouter.put('/update/:id',UpdateUser)
userRouter.get('/getuser',GetUsers)

export default userRouter
