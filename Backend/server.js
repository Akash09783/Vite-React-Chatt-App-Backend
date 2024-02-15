
import express from "express"
const dotenv = "dotenv";
import authRoutes from './routes/auth.routes.js'
import {  configDotenv } from "dotenv";
import connectToMongoDb from "./db/connectToMongoDb.js";
const app = express();

configDotenv();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("hello worlds")

})


app.use("/api/auth",authRoutes)



app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`server running on port ${PORT}`)
});