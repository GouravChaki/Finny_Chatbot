const mongoose = require('mongoose')
const Feature3 = new Schema({
    _id: {
        type: String,
        unique: true,
        required: true,
    },
    c_name: {
        type: String,
    },
    hist_td: {         //time duration for which historical data was requested
        type: String,
    },
    history: {
        type: String,
    },
    Date: {
        type: Date,
        default: Date.now
    },
})

mongoose.exports = mongoose.model('F3', Feature3)


