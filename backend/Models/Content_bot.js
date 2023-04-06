const mongoose = require('mongoose')
const BotSchema = new Schema({
    first_name:{
        type: string,
        required:true
    },
    last_name:{
        type:string,
        required:true,
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true,
        unique:true
    }
})

mongoose.exports=mongoose.model('Bot',BotSchema)