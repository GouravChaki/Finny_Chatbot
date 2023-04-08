const mongoose = require('mongoose')
const Feature4 = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    
    nasdaq: {type:String},

    time_duration: {type: String},

    output: {
        date:[{type:String}],
        open:[{type:Number}],
        high:[{type:Number}],
        low:[{type:Number}],
        close:[{type:Number}],
        adjclose: [{type:Number}],
        volume: [{type:Number}]
    },

    Date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('F4', Feature4)


