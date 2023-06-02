import { Cart } from "../../models/cart/cart.js";

export const addBookToCart = async (req, res) => {
  try {
    const { bookId } = req.body;
    const userId = req.userId;

    await Cart.create({
      userId,
      bookId,
    });
    res.status(201).json({ success: true });
  } catch (error) {
    if (error.message) {
      res.status(401).json({ success: false, message: error.message });
    } else {
      res
        .status(500)
        .json({
          success: false,
          message: "An error occurred while adding to cart",
        });
    }
  }
};
