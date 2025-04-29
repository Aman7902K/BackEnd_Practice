const express = require("express")
require("dotenv").config()

const app = express()
// const port = 3000

app.get('/',(req,res)=>{
    res.send("siuuuuu")
})

app.get("/login",(req,res)=>{
    res.send("you are logged in")
})

app.listen(process.env.PORT,()=>{
    console.log(`running on port: ${process.env.PORT}`);
})
