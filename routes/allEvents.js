var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const model =require('../models/index')
const {lembaga} = require('../models');
const v = new Validator();


router.get('/', async(req,res) =>{
    const Lembaga = await lembaga.findAll({
        include:[
            {model:model.event}
        ],
    });
    return res.json(
        {
        message:"lembaga",
        data:Lembaga,
    });
});
 

module.exports=router;