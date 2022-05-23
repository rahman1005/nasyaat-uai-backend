var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const model =require('../models/index')
const{category}=require("../models")
const v = new Validator();


router.get('/', async(req,res) =>{
    const Category = await category.findAll({
    });
    return res.json(Category);
});
router.post('/', async(req, res) => {
    const schema ={
        categoryName: 'string',
       
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res
        .status(400)
        .json(validate);
    }
    
    // res.send('ok');
    const Category = await category.create(req.body);
    res.json(Category);
});
 

module.exports=router;