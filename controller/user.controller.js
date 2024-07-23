const userDB=require("../model/user.schema");
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken')

const userCreate=async(req,res)=>{
    try {
        let {username,email,password,roll}=req.body
        bcrypt.hash(password,10,async(error,hash)=>{
            let data=await userDB.create({
                username,
                email,
                password:hash
            });
            res.status(200).send(data);
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const login=async(req,res)=>{
    try {
        let {username,password}=req.body;

        let user=await userDB.findOne({username});
        const isMatch=await bcrypt.compare(password,user.password);
        if (isMatch) {
            const pageload={
                username: user.username,
                email: user.email,
                password:user.password,
                role:"adim"
              }
            const token=jwt.sign(pageload,'priveat-key')
            console.log(token);
            res.status(200).send("you are login")
        } else {
            res.status(401).send("you  password is worg")

        }


        
    } catch (error) {
     res.Json(error.message);

    }
}
const getUser=async(req,res)=>{
    try {
        let data=await userDB.find();
    res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const updateUser=async(req,res)=>{
    try {
        let {id}=req.params
        let data=await userDB.findByIdAndUpdate(id,req.body);
    res.status(201).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const deleteUser=async(req,res)=>{
    try {
        let {id}=req.params
        let data=await userDB.findByIdAndDelete(id);
    res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports={userCreate,getUser,updateUser,deleteUser,login}