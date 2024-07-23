const mongoose=require('mongoose');

const db=async()=>{
try {
    await mongoose.connect("mongodb+srv://simranKumavat:simran12345@cluster0.arrsyvy.mongodb.net/API")
    console.log("database is connected..");
} catch (error) {
    console.log(error);
    return false
}
}
module.exports=db;