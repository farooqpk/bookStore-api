import { Cart } from "../../models/cart/cart.js";

export const removeCart = async (req, res) => {
  try {
    const { cartId } = req.params;

    const isCartExist = await Cart.findById(cartId);
    if (isCartExist) {
      await Cart.deleteOne({ _id: cartId });
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ success: false, message: "cart doesnt exist!" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};
