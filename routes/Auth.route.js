const express = require("express");
const router = express.Router();
const createError = require('http-errors');
const User = require('../Models /User.model');
const {authSchema} = require('../helpers/validationSchema')

router.post('/register',async (req,res,next) => {
    // console.log(req.body);
    try {
        const{email,password}= req.body;
        const res = await authSchema.validateAsync(req.body);
        console.log("Reached here" ,res);

        const doesExist = await User.findOne({email:res.email})
        
        if(doesExist)
        throw createError.Conflict(`${res.email} is Already Registered `)

        const user = new User({res})
        const savedUser = await user.save()
        
        res.send(savedUser)
    } catch (error) {
        if(error.isJoi === true)error.status = 422
        next(error)
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