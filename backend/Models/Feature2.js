const mongoose = require("mongoose");
const Feature2 = new Schema({
    user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    nasdaq:[
        {
            c_1: {type:String, required:true},
            c_2: {type:String, required:true}
        }
    ],
    days_after:{type:String,required:true},
    output:[
        {
            nsdq:[{type:String}],
            date:[{type:String}],
            open:[{type:Number}],
            high:[{type:Number}],
            low:[{type:Number}],
            close:[{type:Number}],
            volume:[{type:Number}],
            dividends:[{type:Number}]
        }
    ],
    Date: {
        type: Date,
        default: Date.now,
    },
});

mongoose.exports = mongoose.model("F2", Feature2);
