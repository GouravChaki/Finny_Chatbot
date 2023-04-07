const mongoose = require("mongoose");
const Feature2 = new Schema({
    _id: {
        type: String,
        unique: true,
        required: true,
    },
    price: {
        type: Number,
    },
    rc_name: {
        type: String,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
});

mongoose.exports = mongoose.model("F2", Feature2);
