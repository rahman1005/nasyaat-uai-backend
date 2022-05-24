var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const model =require('../models/index')
const {admin} = require('../models');
const v = new Validator();
const bcrypt =require('bcrypt');
const jwt = require ('jsonwebtoken');

router.get('/', async(req,res)=>{
    const Admin = await admin.findAll();
    res.json(Admin);
});


router.post('/', async(req, res)=>{
    const {name, username, password, confPassword}=req.body;
    if(password !=confPassword) return res.status(400).json({msg:"password dan confirmasi Password tidak sama"});
    const salt =await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password,salt);

    const Admin = await admin.create({
        name: name,
        username: username,
        password, hashPassword
    });
    res.json(Admin); 
})

// router.post('/', async(req, res)=>{
//     const Admin = await admin.findAll({
//         where:{
//             username: req.body.email
//         }
//     });
//     const match = await bcrypt.compare(req.body.password,admin[0].password);
//     if(!match) return res.status(400).json({msg:"password salah"});
//     const adminId = admin[0].eventId;
//     const name = name[0].name;
//     const username = username[0].username;
//     const accessToken =jwt.sign({adminId, name, username}, process.env.ACCESS_TOKEN_SECRET,{
//         expiresIn: '20s'
//     });
//     const resfreshToken = jwt.sign({adminId, name, username}, process.env.REFRESH_TOKEN_SECRET,{
//         expiresIn: '1d'
//     });
//     await admin.update({refresh_token: resfreshToken},{
//         where:{
//             adminId: adminId
//         }
//     });
//     res.cookie('resfreshToken', resfreshToken,{
//         httpOnly: true,
//         maxAge: 24 *60*60*1000
//     });
//     res.json((accessToken));
// })

module.exports=router;