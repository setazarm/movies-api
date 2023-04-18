import User from "../models/userSchema.js"

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
    try{
        const user= await User.findById(req.user._id)
        user.favoriteMovies.push(id)
        await user.save()
        res.json({success:true,data:user})
    }catch(err){
        res.json({success:false, message:err.message})

    }

}