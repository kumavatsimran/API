const {Router}=require('express');
const U_router=Router();
const  {userCreate, getUser, updateUser, deleteUser, login}=require('../controller/user.controller');
const { isAuthjwt } = require('../middleware/jewt');

U_router.post('/',userCreate);
U_router.get('/get',isAuthjwt,getUser);
U_router.patch('/updateU',updateUser);
U_router.delete('/deleteU',deleteUser);
U_router.post('/login',login)
module.exports=U_router;