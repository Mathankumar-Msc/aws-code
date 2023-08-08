const express = require('express')
const app=express();
const config = require('dotenv')
config.config()
const mongoose=require("mongoose")
const router=require("./router")
mongoose.connect("mongodb+srv://mathan:mathan123@cluster0.slq6nhk.mongodb.net/mathan")
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
