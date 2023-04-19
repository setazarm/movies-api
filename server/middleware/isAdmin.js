export const isAdmin=(req,res,next)=>{
    if(req.user.role==="admin"){
        next()
    }else{
        res.json({success:false,message:"unauthorized access"})
    }
}