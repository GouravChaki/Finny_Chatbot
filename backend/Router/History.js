const express = require('express')
const { body, validationResult } = require('express-validator')
const User = require('../documents/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetch=require('../Fetch/Fetchuser')
const router = express.Router();
const JWT_SECRET ="IamGargee"
const F1 = require('../Models/Feature1')
const F2 = require('../Models/Feature2')
const F3 = require('../Models/Feature3')
const F4 = require('../Models/Feature4')
const axios = require('axios')
url1=''
url2=''
url3=''
url4=''
router.get('/history/feature1',fetch,async (req,res)=>{
    try{
    const feature1 = await F1.find({user: req.user.id})
    res.send(feature1)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send("Interal server error")

    }
})

router.get('/history/feature2',fetch,async (req,res)=>{
    try{
    const feature2 = await F2.find({user: req.user.id})
    res.send(feature2)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send("Interal server error")

    }
})

router.get('/history/feature3',fetch,async (req,res)=>{
    try{
    const feature3 = await F3.find({user: req.user.id})
    res.send(feature3)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send("Interal server error")

    }
})

router.get('/history/feature4',fetch,async (req,res)=>{
    try{
    const feature4 = await F4.find({user: req.user.id})
    res.send(feature4)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send("Interal server error")

    }
})

router.post('/add/feature1',fetch,[],async (req,res)=>{
const err = validationResult(req)
if(!err.isEmpty())
{
    return res.status(400).send({errors:err.array()})
    }
try{
    const names = await axios.post(url,price)
    const ob={
        user_id: req.user.id,
      price : req.body.price,
      c_names : names
    }
F1.push({ob})
}
catch{
    console.error(error.message)
    res.status(500).send("Interal server error")
}
})
//Problem with route of feature2
// router.post('/add/feature2',fetch,[],async (req,res)=>{
//     const err = validationResult(req)
//     if(!err.isEmpty())
//     {
//         return res.status(400).send({errors:err.array()})
//         }
//     try{
//         const ob={
            
//         }
//     F2.push({ob})
//     }
//     catch{
//         console.error(error.message)
//         res.status(500).send("Interal server error")
//     }
//     })

router.post('/add/feature3',fetch,[],async (req,res)=>{
    const err = validationResult(req)
    if(!err.isEmpty())
    {
        return res.status(400).send({errors:err.array()})
        }
    try{
        const price = await axios.post(url3,{c_name:req.body.c_name,p_date:req.body.p_date})
        const ob={
            user_id: req.user.id,
            c_name:req.body.c_name,
            p_date:req.body.p_date,
            p_price : price,
        }
    F3.push({ob})
    }
    catch{
        console.error(error.message)
        res.status(500).send("Interal server error")
    }
    })

    router.post('/add/feature4',fetch,[],async (req,res)=>{
        const err = validationResult(req)
        if(!err.isEmpty())
        {
            return res.status(400).send({errors:err.array()})
            }
        try{
            const ob={
                user_id: req.user.id,
                c_name:req.body.c_name,
                hist_td:req.body.hist_td,
            }
        F4.push({ob})
        }
        catch{
            console.error(error.message)
            res.status(500).send("Interal server error")
        }
        })
