var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const model =require('../models/index')
const {lembaga} = require('../models');


router.get('/', async(req,res) =>{
    const Lembaga = await lembaga.findAll({
        include:[
            {model:model.event}
        ],
        where:{
            categoryId:2
        }
    });
    return res.json(
        {
        message:"lembaga",
        data:Lembaga,
    });
});
 

module.exports=router;