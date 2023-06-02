import mongoose from "mongoose";


const blackListedTokenSchema= new mongoose.Schema({
    token:{
        type:String,
        required:true
    }
})

export const BlacklistedToken = mongoose.model("BlackToken",blackListedTokenSchema)