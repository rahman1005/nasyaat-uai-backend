var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const multer =require('multer');
const storage =multer.diskStorage({
    destination:function(req, file,cb){
        cb(null,'./assets/');
    },
    filename:function( req, file, cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage})
const { event } = require('../models');

const v = new Validator();

router.post('/', upload.single('Image'), async(req, res) => {

        // const schema ={
    //     lembagaId:'number',
    //     CategoryId:'number',
    //     lembagaName:'string',
    //     nameEvent: 'string',
    //     link_pendaftaran:'string',
    //     link_instagram:'string',
    //     tanggal: 'string',
    //     waktu: 'string',
    //     tempat:'string',
    //     deskripsi:'string',
    //     Image:'string',  

       
    // }

    // const validate = v.validate(req.body, schema);

    // if(validate.length){
    //     return res
    //     .status(400)
    //     .json(validate);
    // }
    // res.send('ok');

    const Event = await event.create({
        lembagaId:req.body.lembagaId,
        CategoryId:req.body.CategoryId,
        lembagaName:req.body.lembagaName,
        nameEvent:req.body.nameEvent,
        link_pendaftaran:req.body.link_pendaftaran,
        link_instagram:req.body.link_instagram,
        tanggal:req.body.tanggal,
        waktu:req.body.waktu,
        tempat:req.body.tempat,
        deskripsi:req.body.deskripsi,
        Image:req.file.path,  
    });
    res.json(Event);
});

router.get('/:eventId', async(req,res)=>{
    const id = req.params.eventId;
    const Event = await event.findByPk(id);
    return res.json(Event);
})
router.put('/:eventId', async(req, res) =>{
    const id = req.params.eventId;
    let Event = await event.findByPk(id);

    if (!Event){
        return res.json({mesage:"events not Found"});
    }

    const schema ={
        nameEvent: 'string|optional',
        // waktu: 'string|optional',
        link_pendaftaran:'string|optional',
        link_instagram:'string|optional',
        tempat:'string|optional',
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