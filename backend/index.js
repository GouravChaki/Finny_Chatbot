const express = require('express')
const app = express()
const port = 8000;
const routes= require('./Router/Routes')

app.use(express.json)
app.use('/',routes)
// app.get('/',(req,res)=>{
//     res.send('Finnnyy tukai!!!')
// })

app.listen(port,()=>{
    console.log("Server established at port "+port)
})