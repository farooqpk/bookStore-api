import express from 'express'
import { signup } from '../controllers/auth/signup.js'
import { login } from '../controllers/auth/login.js'
import { addBook } from '../controllers/book/addBook.js'
import { getBooks } from '../controllers/book/getBooks.js'
import { addBookToCart} from '../controllers/cart/addBookToCart.js'
import { verifyToken } from '../middlewares/auth/verifyToken.js'
import { logout } from '../controllers/auth/logout.js'
import { getCart } from '../controllers/cart/getCarts.js'
import { removeCart } from '../controllers/cart/removeCart.js'

// route created and exported
export const router = express.Router()


// Routes //

// to retrive all books for home page
router.get("/homePage",verifyToken,getBooks)

// to get cart details
router.get("/getCart",verifyToken,getCart)



// to signup
router.post("/signup",signup)

// to login
router.post("/login",login)

// to add book to book to the book collection(for admin)
router.post("/addBook",verifyToken,addBook)

// to add book to the cart
router.post("/addBookToCart",verifyToken,addBookToCart)



// to logout
router.delete("/logout",verifyToken,logout)

// to remove book from cart
router.delete("/removeCart/:cartId",verifyToken,removeCart)



