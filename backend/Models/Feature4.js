const mongoose = require('mongoose')
const Feature4 = new Schema({
    user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    
    c_name: {
        type: String,
    },
    hist_td: {         //time duration for which historical data was requested
        type: String,
    },
    Date: {
        type: Date,
        default: Date.now
    },
})

mongoose.exports = mongoose.model('F4', Feature4)


