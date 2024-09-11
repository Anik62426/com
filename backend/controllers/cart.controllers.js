import mongoose, {isValidObjectId} from "mongoose"
import { Cart } from "../models/cart.model.js";
import { Users} from "../models/user.model.js"
import { Product } from "../models/product.model.js";
// import { Cart } from '../models/Cart'; // Adjust the path as needed

// Add item to cart

export const addItemToCart = async (req, res) => {
    const { userId,productId, quantity} = req.body;
  
    try {
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = new Cart({ user: userId, items: [] });
        }

        await cart.addItem(productId, quantity);
        

        res.status(200).json({ message: 'Item added to cart', cart });
    } catch (error) {
        res.status(500).json({ message: 'Error adding item to cart', error });
    }
};




// Remove item from cart
export const removeItemFromCart = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        await cart.removeItem(productId);

        res.status(200).json({ message: 'Item removed from cart', cart });
    } catch (error) {
        res.status(500).json({ message: 'Error removing item from cart', error });
    }
};

// Clear cart
export const clearCart = async (req, res) => {
    const { userId } = req.body;

    try {
        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        await cart.clearCart();

        res.status(200).json({ message: 'Cart cleared', cart });
    } catch (error) {
        res.status(500).json({ message: 'Error clearing cart', error });
    }
};

// Get cart
export const getCart = async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ user: userId }).populate('items.product');

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.status(200).json({ cart });
    } catch (error) {
        res.status(500).json({ message: 'Error getting cart', error });
    }
};


// export { addToCart };