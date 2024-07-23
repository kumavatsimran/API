const express=require('express');
const db = require('./config/database');
const router = require('./router/router');
const U_router = require('./router/user.router');
const app=express()


app.use(express.urlencoded({extended:true}));
app.use('/Api',router);
app.use(U_router)
app.listen(8081,(err)=>{
  db()
    console.log("server is starth http://localhost:"+8081)
})