const express = require("express");
const router = express.Router();
const createError = require('http-errors');
const User = require('../Models /User.model')

router.post('/register',async (req,res,next) => {
    console.log(req.body);
    try {
        const{email,password}= req.body;
        if(!email || !password)  throw createError.BadRequest()

        const doesExist = await User.findOne({email:email})
        if(doesExist)throw createError.Conflict(`${email} is Already Registered `)

        const user = new User({email,password})
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        next(error);
    }
})
router.post('/login',async(req,res,next)=>{
    res.send("Login Route");
})
router.post('/refresh-token',async(req,res,next)=>{
    res.send('Refresh Token Route' );
})

router.delete('/logout',async(req,res,next)=>{
    res.send('Logout Route' );
})


module.exports = router;