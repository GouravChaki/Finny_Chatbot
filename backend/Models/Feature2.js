const mongoose = require("mongoose");
const Feature2 = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    nasdaq:{
            c_1: {type:String, required:true},
            c_2: {type:String, required:true}
        },
    days_after:{type:String,required:true},
    output:{
           c1: { 
            nsdq:[{type:String}],
            date:[{type:String}],
            open:[{type:Number}],
            high:[{type:Number}],
            low:[{type:Number}],
            close:[{type:Number}] },
           c2: { 
                nsdq:[{type:String}],
                date:[{type:String}],
                open:[{type:Number}],
                high:[{type:Number}],
                low:[{type:Number}],
                close:[{type:Number}] }
        },
    Date: {
        type: Date,
        default: Date.now,
    },
});

mongoose.exports = mongoose.model("F2", Feature2);
