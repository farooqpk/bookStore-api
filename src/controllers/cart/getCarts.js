
import { Cart } from "../../models/cart/cart.js";

export const getCart = async (req, res) => {
  try {

    const cartItems = await Cart.findOne({ userId: req.userId }).populate("bookId");

    if(cartItems){
        res.status(200).json(cartItems)
    }else{
        res.status(401).json({success:false,message:"there is no cart"})
    }
    
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "An error occurred during fetching" });
  }
};
