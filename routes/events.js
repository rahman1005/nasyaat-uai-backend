var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');

const { event } = require('../models');

const v = new Validator();

router.post('/', async(req, res) => {
    const schema ={
        nameEvent: 'string',
        waktu: 'string',
        link_pendaftaran:'string',
        deskripsi:'string',
        Image:'string',
        lembagaId:'number',
        categoryId:'number',
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res
        .status(400)
        .json(validate);
    }
    // res.send('ok');
    const Event = await event.create(req.body);
    res.json(Event);
});

router.put('/:eventId', async(req, res) =>{
    const id = req.params.eventId;
    let Event = await event.findByPk(id);

    if (!Event){
        return res.json({mesage:"events not Found"});
    }

    const schema ={
        nameEvent: 'string|optional',
        waktu: 'string|optional',
        link_pendaftaran:'string|optional',
        deskripsi:'string|optional',
        Image:'string|optional',
        lembagaId:'number|optional',
        categoryId:'number|optional',
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res
        .status(400)
        .json(validate);
    }
    Event= await Event.update(req.body);
    res.json(Event);
});

router.delete('/:eventId', async(req, res)=>{
    const id = req.params.eventId;

    const Event = await event.findByPk(id);
    if(!event){
        return res.json({message: 'event tidak ditemukan'});
    }
    await Event.destroy();

    res.json({
        message:'event has been deleted'
    });
})

module.exports=router;