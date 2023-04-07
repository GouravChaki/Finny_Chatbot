const connectToMongo=require('./db')
const express = require('express')
const app = express()
const port = 5000;
const routes= require('./Router/Routes')
connectToMongo()
app.use(express.json())
app.use('/',routes)

app.listen(port,()=>{
    console.log("Server established at port "+port)
})