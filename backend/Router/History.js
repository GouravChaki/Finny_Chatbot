const express = require('express')
const { body, validationResult } = require('express-validator')
const User = require('../Models/Userschema')
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
url1='http://127.0.0.1:5000/yours_price'
url2='http://127.0.0.1:5000/compare'
url3='http://127.0.0.1:5000/individual_company'            //these are flask urls
url4='http://127.0.0.1:5000/historical_data'

router.get('/history/feature1',fetch,async (req,res)=>{
    console.log(req)
    try{
    console.log(req.id)
    const feature1 = await F1.find({user_id: req.id.user}).limit(4)
    console.log(typeof(feature1))
    const f=JSON.stringify(feature1)
    console.log(f)
    res.send(f)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send("Interal server error")

    }
})

router.get('/history/feature2',fetch,async (req,res)=>{
    try{
    console.log(req.id)
    const feature2 = await F2.find({user_id: req.id.user}).limit(4)
    const f=JSON.stringify(feature2)
    res.send(f)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send("Interal server error")

    }
})

router.get('/history/feature3',fetch,async (req,res)=>{
    try{
    console.log(req.id)
    //eyJhbGciOiJIUzI1NiJ9.NjQzMWY2OWJmYzhkNTI3NzM3ZWQyMDQ4.N7ZLesnrNOioUE4PA54WeGywbZ_66TVO4MV_UfyepPU
    const feature3 = await F3.find({user_id: req.id.user}).limit(4)
    res.send(feature3)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send("Interal server error")

    }
})

router.get('/history/feature4',fetch,async (req,res)=>{
    try{
    const feature4 = await F4.find({user_id: req.id.user}).limit(4)
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
    console.log(req.body)
    const desc = await axios.post(url1,req.body)
    console.log(desc.data)
    const index1 = []
    const symbol1 = []
    const name1 = []
    const ls_1 = []
    const ls_5 = []
    const ls_7 = []
    const ls_10 = []
    for (let key in desc.data.Index)
    {
        console.log(key)
        // console.log(desc.data.Symbol)
        index1.push(desc.data.Index[key])
        symbol1.push(desc.data.Symbol[key])
        name1.push(desc.data.Name[key])
        ls_1.push(desc.data['Last Sale'][key])
        ls_5.push(desc.data.price_5days[key])
        ls_7.push(desc.data.price_7days[key])
        ls_10.push(desc.data.price_10days[key])
    }
    const desc1 = {
            Index: index1,
            Symbol: symbol1,
            Name: name1,
            Last_Sale: ls_1,
            price_5days:ls_5,
            price_7days: ls_7,
            price_10days: ls_10,
           }
    const ob={
        user_id: req.id.user,
      price : req.body.price,
      c_names : desc1
    }
    console.log(ob)
await F1.create(ob)
res.send('database_updated')
}
catch(error){
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
        console.log(op.data)
        index_1=req.body.nasdaq.c_1
        index_2=req.body.nasdaq.c_2
        console.log(index_1,index_2)
        op1=JSON.parse(op.data[index_1])
        op2=JSON.parse(op.data[index_2])
        // console.log(typeof(op1),op1)
        // console.log(op1.Price['1'][0][0])
        c_1 = {
            nasdaq: index_1,
            date: op1.Date['1'],
            open: parseFloat(op1.Price['1'][0][0]),
            high: parseFloat(op1.Price['1'][0][1]),
            low: parseFloat(op1.Price['1'][0][2]),
            close: parseFloat(op1.Price['1'][0][3]),    
        }
        c_2 = {
            nasdaq: index_2,
            date: op2.Date['1'],
            open: parseFloat(op2.Price['1'][0][0]),
            high: parseFloat(op2.Price['1'][0][1]),
            low: parseFloat(op2.Price['1'][0][2]),
            close: parseFloat(op2.Price['1'][0][3]),    
        }
        const obj={
            user_id: req.id.user,
            nasdaq:req.body.nasdaq,
            days_after:req.body.days_after,
            output: {
                c1:c_1,
                c2:c_2
            }
        }
    console.log(obj)
    await F2.create(obj)
    res.send('feature_2')
    }
    catch(error){
        console.log(error.message)
        res.status(500).send("Interal server error")
    }
    })
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

router.post('/add/feature3',fetch,[body('nasdaq','nasdaq should not be empty').notEmpty(),body('p_days_after','p_days_after should not be empty').notEmpty(),],async (req,res)=>{
    const err = validationResult(req)
    if(!err.isEmpty())
    {
        return res.status(400).send({errors:err.array()})
        }
    try{
        const prices = await axios.post(url3,req.body)
        price = prices.data.Price['1']
        const ob={
            user_id: req.id.user,
            nasdaq:req.body.nasdaq,
            p_days_after:req.body.p_date,
            p_price : price,
        }
    await F3.create(ob)
    res.send("Feature_3")
    }
    catch(error){
        console.log(error.message)
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
            console.log(op.data)
            const date1 = []
            const open1 = []
            const high1 = []
            const low1 = []
            const close1 = []
            const adjclose1 = []
            const volume1 = []
            for (let key in op.data.open)
            {
                key_new=key[0]+key[1]+key[2]+key[3]+key[4]+key[5]+key[6]+key[7]+key[8]+key[9]
                console.log(key_new)
                date1.push(key_new)
                open1.push(op.data.open[key])
                high1.push(op.data.high[key])
                low1.push(op.data.low[key])
                close1.push(op.data.close[key])
                adjclose1.push(op.data.adjclose[key])
                volume1.push(op.data.volume[key])
            }
            ob = {
                date: date1.slice(0,10),
                open: open1.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                high: high1.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                low: low1.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                close: close1.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                adjclose: adjclose1.map((item)=>{a=parseFloat(item);return item;}).slice(0,10),
                volume: volume1.map((item)=>{a=parseFloat(item);return item;}).slice(0,10)     
            }
            const obj={
                user_id: req.id.user,
                nasdaq:req.body.nasdaq,
                time_duration:req.body.time_duration,
                output: ob
            }
        await F4.create(obj)
        res.send('feature_4 connected')
        }
        catch(error){
            console.log(error.message)
            res.status(500).send("Interal server error")
        }
        })

module.exports=router