import User from "../models/userSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
export const getAllUsers =async (req,res)=>{
    try{
        const Users =await User.find()
        res.json({success:true, data:Users})
    }
    catch(err){
        res.json({success:false, message:err.message})

    }

}

export const getSingleUser=async(req,res)=>{
    try{
        const {id}=req.params
        const user= await User.findById(id)
        // const user= awaitUserCollection.findOne({_id:id}) - pass query as object
        if(user){
            res.json({success:true, data:user})
        }else{
            res.json({success:false, message:"please provide a valid id"})
        }
    }catch(err){
        res.json({success:false, message:err.message})

    }

}

export const addNewUser= async(req,res)=>{
  try{
     const newUser= new User(req.body)
     const hashedPassword= bcrypt.hashSync(newUser.password, 10)
     newUser.password=hashedPassword
     await newUser.save()
     res.json({success:true, data:newUser})
  }catch(err){
    res.json({success:false, message:err.message})
    }
  }

  export const updateUser=async(req,res)=>{
    try{
        const{id}=req.params
        const updatedUser= await User.findByIdAndUpdate(id,req.body,{new:true})
        res.json({success:true,data:updatedUser})
    }catch(err){
        res.json({success:false, message:err.message})

    }

}


export const deleteUser=async(req,res)=>{
    try{
        const {id}=req.params
        const deletedUser=await User.findByIdAndRemove(id)
        res.json({success:true,data:deletedUser})
    }catch(err){
        res.json({success:false, message:err.message})

    }

}
export const addMovieToUser=async(req,res)=>{
    const{id}=req.params
    console.log("here movie id",id)
    try{
        const user= await User.findById(req.user._id)
        user.favoriteMovies.push(id)
        await user.save()
        res.json({success:true,data:user})
    }catch(err){
        res.json({success:false, message:err.message})

    }

}


export const loginUser= async(req,res)=>{
    try{
const {email,password}= req.body;
const user= await User.findOne({email}).populate("favoriteMovies")
if(user){
    const verifyPassword=bcrypt.compareSync(password,user.password)
    if(verifyPassword){
        const token= jwt.sign({_id:user._id,email:user.email},process.env.SIGNATURE,{expiresIn:"1h",issuer:"setare"} )
        console.log(token)
        res.header("token",token).json({success:true,data:user})
    }else{
        res.json({success:false, message:"password dosen't match"})
       }
}else{
    res.json({success:false, message:"email dosen't exist"})
}
    }catch(err){
        res.json({success:false, message:err.message})
    
    }
}