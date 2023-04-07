const mongoose = require("mongoose");
const Feature1 = new Schema({
    user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }],

    price: {
        type: Number,
        required: true,
    },

    c_names: [
        {
            type: String,
        },
    ],

    Date: {
        type: Date,
        default: Date.now,
    },
});

mongoose.exports = mongoose.model("F1", Feature1);
