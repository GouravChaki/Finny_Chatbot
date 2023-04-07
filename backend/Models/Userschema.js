const mongoose = require('mongoose')
const UserSchema = new Schema({
    first_name: {
        type: string,
        required: true
    },

    last_name: {
        type: string,
        required: true,
    },

    email: {
        type: string,
        required: true,
        unique: true
    },

    password: {
        type: string,
        required: true,
        unique: true
    },

    Date: {
        type: Date,
        default: Date.now
    },
})

mongoose.exports = mongoose.model('User', UserSchema)

/* Collection schemas
Feature 1 : 
attributes: price , Company names (5 names that flask server will provide), Recommended company name (refered from feature2 id), date

Feature 2: (Subset of feature 1 in some cases)
attributes: price company name , date

Feature 3: 
attributes: Company_Name, Prediction_date, Predicted_value, date

Feature 4: 
attributes: Company_Name, Historical_data_time_duration, date
*/