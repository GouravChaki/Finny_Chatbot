const mongoose = require('mongoose')
const UserconSchema = new Schema({
u_id:{
    type:number,
    unique:true,
},
desc: string
})

mongoose.exports=mongoose.model('Usercon',UserconSchema)