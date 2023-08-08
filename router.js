const express=require("express")
const router=express.Router()
const {PostData,GetData,UpdateData,DeleteData,DataShow}=require("./controller")
router.post("/post",PostData)
router.get("/mathan",DataShow)
router.get("/get",GetData)
router.put("/update",UpdateData)
router.delete("/delete",DeleteData)
module.exports=router;