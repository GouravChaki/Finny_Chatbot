const connectToMongo=require('./db')
const express = require('express')
const app = express()
const finny_nasdaq_api=require('./API/finny_nasdaq_generate')
const port = process.env.PORT||5000;
// const routes= require('./Router/Routes')
connectToMongo()
app.use(express.json())
// app.use('/',routes)
app.get('/',(req,res)=>{
    finny_nasdaq_api()
    return res.send("TOKAI")
})
app.listen(port,()=>{
    console.log("Server established at port "+port)
})