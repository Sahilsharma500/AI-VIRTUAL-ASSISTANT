import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js";

const app = express()
dotenv.config()

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hi");
})
app.listen(port, () => {
    connectDb();
    console.log(`server running on port ${port}`);
});