const mongoose = require('mongoose')
const BotSchema = new Schema({
id:{
    type:number,
    unique:true,
},
subject: string
})

mongoose.exports=mongoose.model('Bot',BotSchema)