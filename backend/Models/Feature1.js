const mongoose = require("mongoose");
const Feature1 = new Schema({
    _id: {
        type: String,
        unique: true,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    c_names: [
        {
            type: String,
        },
    ],

    rec_name: [{ type: Schema.Types.ObjectId, ref: "F2" }],

    Date: {
        type: Date,
        default: Date.now,
    },
});

mongoose.exports = mongoose.model("F1", Feature1);
