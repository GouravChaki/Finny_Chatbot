const jwt=require("jsonwebtoken")
const JWT_SECRET="IamGargee"
const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token')
    if(!token){
        res.status(401).send({error:"Please authenticate using valid token"})
    }
    try{
        const data = jwt.verify(token,JWT_SECRET)
        console.log(data)
        req.id= data
        next()
    }catch(error){
        res.status(401).send("Internal server error")
    }
}
module.exports = fetchuser