const mongoose = require("mongoose");
const Feature2 = new Schema({
    user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    feature1_ref: [{ type: Schema.Types.ObjectId, ref: "F1" }],
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
