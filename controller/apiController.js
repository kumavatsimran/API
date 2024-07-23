const apiModel=require("../model/schema")
const getData=async(req,res)=>{
 try {
    let data=await apiModel.find()
    res.status(200).send(data);
 } catch (error) {
    console.log(error.message);
 }
};
const create=async(req,res)=>{
    try {
       let data=await apiModel.create(req.body)
       res.status(201).send(data);
    } catch (error) {
       console.log(error.message);
    }
   };
   const update=async(req,res)=>{
    try {
        let {id}=req.params
       let data=await apiModel.findByIdAndUpdate(id,req.body)
       res.status(200).send(data);
    } catch (error) {
       console.log(error.message);
    }
   };
   const deleteData=async(req,res)=>{
    try {
        let {id}=req.params
       let data=await apiModel.findByIdAndDelete(id,req.body)
       res.status(204).send(data);
    } catch (error) {
       console.log(error.message);
    }
   };


module.exports={getData,create,update,deleteData}