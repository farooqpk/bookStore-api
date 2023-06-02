
import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({

    name:{
        type:String,
        required: [true, 'book name is required']
    },
    author:{
        type:String,
        required:[true, 'author is required']
    },
    price:{
        type:Number,
        required:[true, 'price is required']
    },
    stock:{
        type:Number,
        required:[true, 'stock is required']
    }
   
})



export const Book = mongoose.model("Book",bookSchema)