const express = require('express')
const { body, validationResult } = require('express-validator')
const User = require('../documents/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetch=require('../Fetch/Fetchuser')
const router = express.Router();
const JWT_SECRET ="jwtsecret"
const market = require('../documents/market')

router.get('/',(req,res)=>{
    res.send('Hie! Finny is here!!')
})

//signup page user creation

router.post('/createuser', [
    body('first_name', 'length must be minimum 4').isLength({ min: 4 }),
    body('last_name', 'length must be minimum 4').isLength({ min: 4 }),
    body('email', 'not of email type').isEmail(),
    body('password', 'password length must be minimum 5').isLength({ min: 3 }),
    body('date','date should not be empty').notEmpty(),
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(404).json({ error: error.array() });
    }
    try{
        let user = await User.findOne({email:req.body.email})
        console.log(user)
    if(user)
    {
        return res.status(600).json({error:{msg:"A user with this email id already exists"}})
    }
    const salt= await bcrypt.genSalt(10)
    const pass= await bcrypt.hash(req.body.password,salt)
    // const [firstname,lastname,email,password,address,contact,]
    user= await User.create({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        password: pass
    })
    const authtoken=jwt.sign({
        user:user.id
    },JWT_SECRET)
    res.send(authtoken)
    }
    catch(error)
    {
        res.status(500).send("Some Error Occured")
    }
})

//login page user fetching and validation


router.post('/login', [
    body('email','email is not right').isEmail(),
    body('password', 'password length must be minimum 3').isLength({ min: 3 })
], async (req, res) => {

    //validation

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(404).json({ error:{msg: error.array() }});
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

router.post('/getuser',fetch, async (req,res)=>{
    try{
        const user=await User.findById(req.id)
        res.json(user)
    }
    catch(error){
        res.status(500).send("An error encountered")
    }
})
module.exports=router
