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
    desc = JSON.parse(desc)
    const index1 = []
    const symbol1 = []
    const name1 = []
    const ls_1 = []
    const ls_5 = []
    const ls_7 = []
    const ls_10 = []
    for (let key in desc.Index)
    {
        index1.push(desc.Index[key])
        symbol1.push(desc.Symbol[key])
        name1.push(desc.Name[key])
        ls_1.push(desc['Last Sale'][key])
        ls_5.push(desc.price_5days[key])
        ls_7.push(desc.price_7days[key])
        ls_10.push(desc.price_10days[key])
    }
    desc1 = {
            Index: index1,
            Symbol: symbol1,
            Name: name1,
            Last_Sale: ls_1,
            price_5days:ls_5,
            price_7days: ls_7,
            price_10days: ls_10,
           }
    const ob={
        user_id: req.user.id,
      price : req.body.price,
      c_names : desc1
    }
F1.push(ob)
}
catch{
    console.error(error.message)
    res.status(500).send("Interal server error")
}
})

<<<<<<< HEAD
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
            date: op.date,
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
=======
// router.post('/add/feature2',fetch,[body('nasdaq','nasdaq codes should not be empty').notEmpty(),body('days_after','days_after should not be empty').notEmpty()],async (req,res)=>{
//     const err = validationResult(req)
//     if(!err.isEmpty())
//     {
//         return res.status(400).send({errors:err.array()})
//         }
//     try{
//         const op = await axios.post(url2,req.body)
//         op = JSON.parse(op)
//         ob = {
//             date: op.date,
//             open: op.open.map((item)=>{a=parseFloat(item);return item;}),
//             high: op.high.map((item)=>{a=parseFloat(item);return item;}),
//             low: op.low.map((item)=>{a=parseFloat(item);return item;}),
//             close: op.close.map((item)=>{a=parseFloat(item);return item;}),
//             volume: op.volume.map((item)=>{a=parseFloat(item);return item;}),
//             dividends: op.dividends.map((item)=>{a=parseFloat(item);return item;})     
//         }
//         const obj={
//             user_id: req.user.id,
//             nasdaq:req.body.nasdaq,
//             days_after:req.body.days_after,
//             output: op
//         }
//     F2.push(obj)
//     }
//     catch{
//         console.error(error.message)
//         res.status(500).send("Interal server error")
//     }
//     })
>>>>>>> e58fe0c26d67108d9487dbedb3e9398d141e7538

router.post('/add/feature3',fetch,[body('nasdaq','nasdaq should not be empty').notEmpty(),body('p_date','p_date should not be empty').notEmpty(),],async (req,res)=>{
    const err = validationResult(req)
    if(!err.isEmpty())
    {
        return res.status(400).send({errors:err.array()})
        }
    try{
        const prices = await axios.post(url3,req.body)
        prices = JSON.parse(prices)
        price = prices.Price['0']
        const ob={
            user_id: req.user.id,
            nasdaq:req.body.nasdaq,
            p_date:req.body.p_date,
            p_price : price,
        }
    F3.push(ob)
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
            const date1 = []
            const open1 = []
            const high1 = []
            const low1 = []
            const close1 = []
            const adjclose1 = []
            const volume1 = []
            for (let key in op.open)
            {
                date1.push(key.slice("T")[0])
                open1.push(op.open[key])
                high1.push(op.high[key])
                low1.push(op.low[key])
                close1.push(op.close[key])
                adjclose1.push(op.adjclose[key])
                volume1.push(op.volume[key])
            }
            ob = {
                date: op.date1.slice(0,10),
                open: op.open1.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                high: op.high1.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                low: op.low1.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                close: op.close1.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                adjclose: op.adjclose1.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                volume: op.volume1.map((item)=>{a=parseFloat(item);return item;}).slice(0,10)     
            }
            const obj={
                user_id: req.user.id,
                nasdaq:req.body.nasdaq,
                time_duration:req.body.time_duration,
                output: ob
            }
        F4.push(obj)
        }
        catch{
            console.error(error.message)
            res.status(500).send("Interal server error")
        }
        })
