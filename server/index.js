import express from "express";
import 'dotenv/config'
import dbConnet from "./config/mongodb.js";
import userRouter from "./Routes/userRouter.js";
import cors from 'cors'
import UserModel from "./Models/UserModel.js";
const app = express();
const port =process.env.PORT || 8000;
dbConnet()

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from cholokinbo server')
  })

app.use("/api/user", userRouter)

app.listen(port, () => {
    console.log(`server in running on port ${port}`)
  })