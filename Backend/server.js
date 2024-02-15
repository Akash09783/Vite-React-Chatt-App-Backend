
import express from "express"
const dotenv = "dotenv";
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("hello worlds")

})
app.get("/",(req,res)=>{
    res.send("Sign Up Route")

})

app.get("/",(req,res)=>{
    res.send("login Route")

})

app.get("/",(req,res)=>{
    res.send("logout Route")

})





app.listen(PORT,()=>console.log(`server running on port ${PORT}`))