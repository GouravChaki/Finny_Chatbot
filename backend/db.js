const mongoose=require('mongoose')
const mongoURI="mongodb+srv://GouravChaki:Gourav@cluster0.ifo2taa.mongodb.net/finny"
const connectmonngo= ()=>{
        mongoose.connect(mongoURI,()=>{
            console.log('Connected to mongodb')
        })
}
module.exports=connectmonngo;

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