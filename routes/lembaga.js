const { Router } = require('express');
var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const {lembaga} = require('../models');
const v = new Validator();

router.get('/', async(req,res)=>{
    const Lembaga = await lembaga.findAll();
    return res.json(Lembaga);
})
router.post('/', async(req, res) => {
    const schema ={
        lembagaName: 'string',
        categoryId: 'number',
        emailLembaga:'string',
        password:'string',
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res
        .status(400)
        .json(validate);
    }
    // res.send('ok');
    const Lembaga = await lembaga.create(req.body);
    res.json(Lembaga);
});

router.put('/:LembagaId', async(req, res)=>{
    const id = req.params.LembagaId;
    let Lembaga = await lembaga.findByPk(id);
    if(!Lembaga){
        return res.json({message:"lembaga not found"})
    }

    const schema ={
        lembagaName:'string|optional',
        categoryId:'number|optional',
        emailLembaga:'string|optional',
        password:'string|optional',
    }
    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res
        .status(400)
        .json(validate);
    }
    Lembaga = await Lembaga.update(req.body);
    res.json(Lembaga);
});
router.delete('/:LembagaId', async(req, res)=>{
    const id = req.params.LembagaId;
    const Lembaga = await lembaga.findByPk(id);
    if(!Lembaga){
        return res.json({message: 'event tidak ditemukan'});
    }
    await Lembaga.destroy();

    res.json({
        message:'lembaga has been deleted'
    });
})

module.exports=router;
