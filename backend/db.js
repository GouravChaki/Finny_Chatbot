const mongoose = require('mongoose')
const mongoUri = "mongodb+srv://GouravChaki:Gourav@cluster0.ifo2taa.mongodb.net/finny"
const connectToMongo = async ()=>{
    await mongoose.connect(mongoUri)
    console.log('Database Connected')
}
module.exports = connectToMongo;