const mongoose=require("mongoose")
const dataschema = new mongoose.Schema({
name:String,
email:String,
password:{
    type:String,
    select:false,
}
})
module.exports=mongoose.model("mydata",dataschema)