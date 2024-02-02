import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'

dotenv.config()
mongoose.connect('mongodb+srv://anuragyadav20602:6x04puMsaKee7NCf@cluster0.thoou2u.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("MongoDB Connected")
}).catch((err)=>{
    console.log(err)
})


const app = express()
app.use(express.json())

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

app.use('/api/user',userRouter)
app.use('/api/auth', authRouter)
