import mongoose, {Schema} from "mongoose";

const ProductSchema = new Schema ({
    id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        require: true,
      },
      image: {
        type: String,
        require: true,
      },
      category: {
        type: String,
        require: true,
      },
      new_price: {
        type: Number,
        require: true,
      },
      old_price: {
        type: Number,
        require: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      avilable: {
        type: Boolean,
        default: true,
      },
      rating:{
        type: Number,
        require: true,
      },
 })
   
  


  export const Product = mongoose.model("Product", ProductSchema)