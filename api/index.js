import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser'
import path from 'path'

dotenv.config()
mongoose.connect('mongodb+srv://anuragyadav20602:6x04puMsaKee7NCf@cluster0.thoou2u.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("MongoDB Connected")
}).catch((err)=>{
    console.log(err)
})



const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT =  3000;
app.listen(PORT, () => console.log(`The server is running on port ${PORT}.`));


app.use("/api/user", userRouter);


app.use("/api/auth", authRouter);


app.use("/api/listing/", listingRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
});


app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
