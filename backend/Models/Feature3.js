const mongoose = require("mongoose");
const Feature3 = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    
    nasdaq: {type: String},

    p_date: {type: String},

    p_price: {type: Number},

    Date: {
        type: Date,
        default: Date.now,
    },
});

mongoose.exports = mongoose.model("F3", Feature3);
