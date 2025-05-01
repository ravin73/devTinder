const adminAuth=(req,res,next)=>{
    const token="xyz"
    const isAdminAuthorized=token==="xyza"
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized access")
    }else{
        next()
    }
}
module.exports={adminAuth}