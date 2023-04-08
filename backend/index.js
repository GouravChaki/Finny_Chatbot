const connectToMongo=require('./db')
const express = require('express')
connectToMongo()
const app = express()
const cors = require('cors')
const port = process.env.PORT||8000;
const routes1= require('./Router/Routes')
const routes2= require('./Router/History')

app.use(express.json())
app.use(cors())
app.use('/',routes1,routes2)

app.listen(port,()=>{
    console.log("Server established at port ")
})