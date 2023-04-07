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
url3=''            //these are flask urls
url4=''
router.get('/history/feature1',fetch,async (req,res)=>{
    try{
    const feature1 = await F1.find({user: req.user.id}).limit(4)
    res.send(feature1)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send("Interal server error")

    }
})

router.get('/history/feature2',fetch,async (req,res)=>{
    try{
    const feature2 = await F2.find({user: req.user.id}).limit(4)
    res.send(feature2)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send("Interal server error")

    }
})

router.get('/history/feature3',fetch,async (req,res)=>{
    try{
    const feature3 = await F3.find({user: req.user.id}).limit(4)
    res.send(feature3)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send("Interal server error")

    }
})

router.get('/history/feature4',fetch,async (req,res)=>{
    try{
    const feature4 = await F4.find({user: req.user.id}).limit(4)
    res.send(feature4)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send("Interal server error")

    }
})

router.post('/add/feature1',fetch,[body('price','Price should not be empty').notEmpty()],async (req,res)=>{
const err = validationResult(req)
if(!err.isEmpty())
{
    return res.status(400).send({errors:err.array()})
    }
try{
    const desc = await axios.post(url1,price)
    const ob={
        user_id: req.user.id,
      price : req.body.price,
      c_names : desc
    }
F1.push({ob})
}
catch{
    console.error(error.message)
    res.status(500).send("Interal server error")
}
})

router.post('/add/feature2',fetch,[body('nasdaq','nasdaq codes should not be empty').notEmpty(),body('days_after','days_after should not be empty').notEmpty()],async (req,res)=>{
    const err = validationResult(req)
    if(!err.isEmpty())
    {
        return res.status(400).send({errors:err.array()})
        }
    try{
        const op = await axios.post(url2,req.body)
        op = JSON.parse(op)
        ob = {
            date: op.date.slice(0,10),
            open: op.open.map((item)=>{a=parseFloat(item);return item;}),
            high: op.high.map((item)=>{a=parseFloat(item);return item;}),
            low: op.low.map((item)=>{a=parseFloat(item);return item;}),
            close: op.close.map((item)=>{a=parseFloat(item);return item;}),
            volume: op.volume.map((item)=>{a=parseFloat(item);return item;}),
            dividends: op.dividends.map((item)=>{a=parseFloat(item);return item;})     
        }
        const obj={
            user_id: req.user.id,
            nasdaq:req.body.nasdaq,
            days_after:req.body.days_after,
            output: {op}
        }
    F2.push({obj})
    }
    catch{
        console.error(error.message)
        res.status(500).send("Interal server error")
    }
    })

router.post('/add/feature3',fetch,[body('nasdaq','nasdaq should not be empty').notEmpty(),body('p_date','p_date should not be empty').notEmpty(),],async (req,res)=>{
    const err = validationResult(req)
    if(!err.isEmpty())
    {
        return res.status(400).send({errors:err.array()})
        }
    try{
        const price = await axios.post(url3,req.body)
        const ob={
            user_id: req.user.id,
            nasdaq:req.body.nasdaq,
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

    router.post('/add/feature4',fetch,[body('nasdaq','nasdaq should not be empty').notEmpty(),body('time_duration','time_duration should not be empty').notEmpty()],async (req,res)=>{
        const err = validationResult(req)
        if(!err.isEmpty())
        {
            return res.status(400).send({errors:err.array()})
            }
        try{
            const op = await axios.post(url4,{nasdaq:req.body.nasdaq,time_duration:req.body.time_duration})
            op = JSON.parse(op)
            ob = {
                date: op.date.slice(0,10),
                open: op.open.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                high: op.high.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                low: op.low.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                close: op.close.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                volume: op.volume.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                dividends: op.dividends.map((item)=>{a=parseFloat(item);return item;}).slice(0,10)     
            }
            const obj={
                user_id: req.user.id,
                nasdaq:req.body.nasdaq,
                time_duration:req.body.time_duration,
                output: {ob}
            }
        F4.push({obj})
        }
        catch{
            console.error(error.message)
            res.status(500).send("Interal server error")
        }
        })
