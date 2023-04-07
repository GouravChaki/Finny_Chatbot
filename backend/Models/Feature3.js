const mongoose = require("mongoose");
const Feature3 = new Schema({
    _id: {
        type: String,
        unique: true,
        required: true,
    },
    c_name: {
        type: String,
    },
    p_date: {
        type: String,
    },
    p_price: {
        type: Number,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
});

mongoose.exports = mongoose.model("F3", Feature3);
