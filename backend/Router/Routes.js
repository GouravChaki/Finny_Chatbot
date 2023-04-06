const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Hie! Finny is here!!')
})

module.exports=router