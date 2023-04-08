const mongoose = require("mongoose");
const Feature3 = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    
    nasdaq: {type: String},

    p_days_after:{type: String},

    p_price: {type: Number},

    Date: {
        type: Date,
        default: Date.now,
    },
});
user=mongoose.model("F3", Feature3);
module.exports = user
