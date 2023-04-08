const mongoose = require('mongoose')
const Feature1 = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    price: {
        type: Number,
        required: true,
    },

    c_names: {
            Index: [{type: Number}],
            Symbol: [{type: String}],
            Name: [{type:String}],
            Last_Sale: [{type:Number}],
            price_5days: [{type:Number}],
            price_7days:[{type:Number}],
            price_10days: [{type: Number}],
        },

    Date: {
        type: Date,
        default: Date.now,
    },
});
let user=mongoose.model('F1', Feature1);
module.exports = user 
