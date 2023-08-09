const express = require('express')
const app=express();
const config = require('dotenv')
config.config()
const mongoose=require("mongoose")
const router=require("./router")
mongoose.connect("mongodb+srv://Test:Test123@cluster0.3ohdozu.mongodb.net/kavi")
.then(()=>{
console.log("db connected successfully");
}).catch(()=>{
console.log("db not connected");
})
app.use(express.json())
app.use('/api',router)
const PORT = 6000
app.listen(PORT,()=>{
console.log("server is running",PORT);
})
