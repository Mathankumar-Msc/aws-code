const Schema=require("./module")
const PostData=async(req,res)=>{
const data = new Schema({
...req.body
})
const SaveData= await data.save()
res.json(SaveData)

}
const GetData=async(req,res)=>{
const Datas=await Schema.find({})
res.json(Datas)  
}
const UpdateData=async(req,res)=>{
const updatedata=await
schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
res.json({msg:"update successfully",data:updatedata})
}
const DeleteData=async(req,res)=>{
const deletedata= await schema.findByIdAndDelete(req.params.id);
res.json({msg:"data delete successfully"});
}

const DataShow= async(req, res)=>{
    res.json("MathanKumar Msc")
}
module.exports={PostData,GetData,UpdateData,DeleteData,DataShow}