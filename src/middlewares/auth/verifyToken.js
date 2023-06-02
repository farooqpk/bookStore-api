import {BlacklistedToken} from '../../models/blacklist/blacklist.js'
import jwt from 'jsonwebtoken'

export const verifyToken =async(req,res,next)=>{
try {
    
    const token = req.headers.authorization

    if(token){
   
        const IsBlack = await BlacklistedToken.exists({token})
        
        if(IsBlack){
            res.status(401).json({success:false,message:"token is invalid"})
        }else{

           jwt.verify(token,process.env.SECRET,(err,decoded)=>{

            if(err){
                res.status(401).json({success:false,message:"invalid token"})
            }else{
                
                req.userId=decoded.userId
                next()
            }
           })
        }

    }else{
        res.status(401).json({success:false,message:"!unauthorized"})
    }

} catch (error) {
    res
    .status(500)
    .json({ success: false, message: "An error related to authentication" });
}
}