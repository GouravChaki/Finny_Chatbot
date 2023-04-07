const mongoose = require('mongoose')
const BotSchema = new Schema({
id:{
    type:number,
    unique:true,
},
desc : string
})

mongoose.exports=mongoose.model('Bot',BotSchema)