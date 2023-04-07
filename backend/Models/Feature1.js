const mongoose = require("mongoose");
const Feature1 = new Schema({
    user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }],

    price: {
        type: Number,
        required: true,
    },

    c_names: [
        {
            index: [{type: Number}],
            symbol: [{type: String}],
            name: [{type:String}],
            last_price: [{type:Number}],
            last_5: [{type:Number}],
            last_7:[{type:Number}],
            last_10: [{type: Number}],
        }
    ],

    Date: {
        type: Date,
        default: Date.now,
    },
});

mongoose.exports = mongoose.model("F1", Feature1);
