const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    roll:{
        type:String,
        require:true
    }
});

const  userDB=mongoose.model("userTble",userSchema);
 
module.exports=userDB