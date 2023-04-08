const mongoose = require('mongoose')
const mongoUri = "mongodb+srv://GouravChaki:Gourav@cluster0.ifo2taa.mongodb.net/finny"
const connectToMongo =async ()=>{
    try{
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoUri)
        console.log('Database Connected')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
}
module.exports = connectToMongo;

// const mongoose = require('mongoose')

// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(process.env.MONGO_URI) 
//         console.log('Mongo connected')
//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }

// module.exports = connectDB