import { Router } from "express";
// import {addToCart} from "../controllers/cart.controllers.js"
// const router = Router()


import express from 'express';
import {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    getCart
} from '../controllers/cart.controllers.js'; // Adjust the path as needed

const router = express.Router();

// Add item to cart
router.post('/add', addItemToCart);

// Remove item from cart
router.post('/remove', removeItemFromCart);

// Clear cart
router.post('/clear', clearCart);

// Get cart
router.get('/:userId', getCart);

export default router;


// router.route("/cart").post(addToCart)   


// export default router