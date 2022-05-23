var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const model =require('../models/index')
const {event} = require('../models');
const v = new Validator();


// router.get('/', async(req,res) =>{
//     const Lembaga = await lembaga.findAll({
//         include:[
//             {model:model.event,required:true,}
//         ],
//     });
//     return res.json(
//         {
//         message:"lembaga",
//         data:Lembaga,
//     });
// });
router.get('/', async(req,res)=>{
    const Event = await event.findAll();
    return res.json({data:Event});
})

module.exports=router;