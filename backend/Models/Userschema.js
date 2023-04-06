const mongoose = require('mongoose')
const UserSchema = new Schema({
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
    },

    bot_content:[{ type: Schema.Types.ObjectId, ref: 'Bot' }],
    user_content:[{ type: Schema.Types.ObjectId, ref: 'Usercon' }],
})

mongoose.exports=mongoose.model('User',UserSchema)