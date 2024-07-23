const mongoose=require('mongoose');

const schemaDB=new mongoose.Schema({
    title:String,
    image:String,
    price:Number,
    categry:String

})
const apiModel=mongoose.model("apiTBL",schemaDB);
module.exports=apiModel;