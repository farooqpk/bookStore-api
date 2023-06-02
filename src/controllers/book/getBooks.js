import { Book } from "../../models/book/book.js";


export const getBooks=async(req,res)=>{

    try {
      
        const books = await Book.find()
        if(books){
            res.status(200).json(books)
        }else{
            res.status(404).json({success:false,message:"sorry there is no book exist"})
        }
      
    } catch (error) {
        res
        .status(500)
        .json({ success: false, message: "An error occurred during fetching" });
    }
}