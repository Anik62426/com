import mongoose, {Schema} from "mongoose";

const CartSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'Users', 
      required: true
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product', 
          required: true
        },
        quantity: {
          type: Number,
          required: true,
          min: 1
        },
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });
 
  CartSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
  });
  
  // Calculate total price before saving
  CartSchema.pre('save', function(next) {
    this.totalPrice = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    next();
  });
  
  // Instance method to add an item to the cart
  CartSchema.methods.addItem = function(product, quantity) {
    const existingItem = this.items.find(item => item.product.toString() === product.toString());
  
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  
    return this.save();
  };
  
  // Instance method to remove an item from the cart
  CartSchema.methods.removeItem = function(product) {
    this.items = this.items.filter(item => item.product.toString() !== product.toString());
    return this.save();
  };
  
  // Instance method to clear the cart
  CartSchema.methods.clearCart = function() {
    this.items = [];
    return this.save();
  };

export const Cart = mongoose.model("Cart", CartSchema)