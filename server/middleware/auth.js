import jwt from "jsonwebtoken"
import User from "../models/userSchema.js"
export const auth= async(req,res,next)=>{
    try{
        console.log(req.params)
        const token=req.headers.token
        console.log(req.headers)
       const payload= jwt.verify(token,process.env.SIGNATURE) 
        const user=await User.findById(payload._id)
        req.user=user 
        next()
    
    }catch(err){
        res.json({success:false,message:err.message})
    }
   
}
