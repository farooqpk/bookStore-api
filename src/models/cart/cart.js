
import mongoose from "mongoose";



const cartSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required:true
    }
   
})



export const  Cart = mongoose.model("Cart",cartSchema)