import express from 'express'
import { AdminLogin, GetUsers, RemoveUser, UpdateUser, UserLogin, UserRegister } from '../controllers/usercontroller.js';
import adminAuth from '../middleware/Adminauth.js';


const userRouter = express.Router();

userRouter.post('/register',UserRegister)
userRouter.post('/login',UserLogin)
userRouter.post('/admin', AdminLogin);
userRouter.post('/remove',RemoveUser)
userRouter.put('/update/:id',UpdateUser)
userRouter.get('/users', adminAuth ,GetUsers)

export default userRouter
