const {Router}=require('express');
const { getData, create, update, deleteData } = require('../controller/apiController');
const router=Router();

router.get('/',getData);
router.post('/',create);
router.patch('/:id',update);
router.delete('/:id',deleteData);


module.exports=router;