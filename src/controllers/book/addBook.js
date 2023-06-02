import { Book } from "../../models/book/book.js";

export const addBook = async (req, res) => {
  try {
    const { name, author, price, stock } = req.body;

    if (name && author && price && stock) {
      await Book.create({
        name,
        author,
        price,
        stock,
      });

      res.status(201).json({ success: true });
    } else {
      res
        .status(422)
        .json({ success: false, message: "Missing required fields" });
    }
  } catch (error) {
    if (error.message) {
      res.status(401).json({ success: false, message: error.message });
    } else {
      res
        .status(500)
        .json({ success: false, message: "An error occurred while adding book" });
    }
  }
};
