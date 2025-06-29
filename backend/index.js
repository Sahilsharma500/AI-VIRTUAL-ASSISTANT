import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from 'cors';

import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express()
dotenv.config()

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

const port = process.env.PORT || 5000;

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.get("/", (req, res) => {
    res.send("Hi");
})

app.listen(port, () => {
    connectDb();
    console.log(`server running on port ${port}`);
});