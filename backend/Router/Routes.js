const express = require('express')
const { body, validationResult } = require('express-validator')
const User = require('../Models/Userschema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetch=require('../Fetch/Fetchuser')
const router = express.Router();
const JWT_SECRET ="IamGargee"

router.get('/auth',(req,res)=>{
    res.send('Hie! Finny is here!!')
})

//signup page user creation

router.post('/auth/createuser', [
    body('firstname', 'length must be minimum 2').isLength({ min: 2 }),
    body('lastname', 'length must be minimum 2').isLength({ min: 2 }),
    body('email', 'not of email type').isEmail(),
    body('password', 'password length must be minimum 2').isLength({ min: 2 }),
],async (req, res) => {
    const error = validationResult(req); 
    if (!error.isEmpty()) {
        return res.status(404).json({ error: error.array() });
    }
    try{
        console.log(req.body)
        let user = await User.findOne({email:req.body.email})
    if(user)
    {
        return res.status(600).json({error:{msg:"A user with this email id already exists"}})
    }
    const salt= await bcrypt.genSalt(10)
    const pass= await bcrypt.hash(req.body.password,salt)
    user= await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: pass
    })
    const authtoken=jwt.sign({
        user:user.id
    },JWT_SECRET)
    console.log(authtoken)
    res.send(authtoken)
    }
    catch(error)
    {
        res.status(500).send("Some Error Occured")
    }
})

//login page user fetching and validation


router.post('/auth/login', [
    body('email','email is not right').isEmail(),
    body('password', 'password length must be minimum 3').isLength({ min: 3 })
], async (req, res) => {

    //validation

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(404).send("Not a email type");
    }
    
    try{
        const {email,password}=req.body
        let user = await User.findOne({email})

    //when no user with given email is present

    if(!user)
    {
        return res.status(404).send("No user with the given credentials exists")
    }

    //convert entered password to a hashed value

    const passcompare=await bcrypt.compare(password,user.password)
    
    //if password doesn't match

    if(!passcompare){
        return res.status(404).send("Password doesn't match")
    }
    // console.log(typeof user)
    const authtoken=jwt.sign(user.id,JWT_SECRET)
    res.send(authtoken)
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send("Some Error Occured")
    }
})

// to fetch user

router.post('/auth/getuser',fetch, async (req,res)=>{
    try{
        console.log('req')
        const user=await User.findById(req.id)
        res.json(user)
    }
    catch(error){
        res.status(500).send("An error encountered")
    }
})

module.exports=router
