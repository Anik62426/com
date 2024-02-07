import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";


const CartItemsList = () => {
  const { getTotalCartAmounts, all_product, cartItems, removeFromCart ,addToCart,getTotalCartItems,getOldCartAmounts } =
    useContext(ShopContext);
  return (
    <div>
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
              <div className=" w-[60%] ml-16 mt-3 rounded border">
                <button
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="float-right px-4 pt-1 text-2xl text-black hover:text-gray-600"
                >
                  X
                </button>
                <div className="flex ">
                  <div className=" ">
                    <img
                      src={e.image}
                      alt="image"
                      className=" w-24  m-2 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                    />
                  </div>

                  <div className=" pl-5 ">
                    <p className=" text-sm font-bold  pt-2 text-gray-900">
                      {e.name}
                    </p>
                    <div className="flex gap-2 items-center"> 
                 <button
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className=" text-2xl text-black hover:text-gray-600"
                >
                  -
                </button>
                <p className=" text-sm p-0.5 rounded-md border-2 border-gray-500 ">Qty : {cartItems[e.id]}</p>
               <button
                  onClick={() => {
                    addToCart(e.id);
                  }}
                  className="text-2xl text-black hover:text-gray-600"
                >
                  +
                </button>
                    </div>
                    <div className="flex gap-4">
                      <p className="pt-2 text-sm">₹{e.new_price}</p>
                      <p className="pt-2 line-through text-gray-500 text-sm">
                        ₹{e.old_price}
                      </p>
                      <p className="pt-2 text-sm text-pink-400">64% OFF</p>
                    </div>
                    <p className=" pt-2 text-sm ">
                      Total ₹ {e.new_price * cartItems[e.id]}
                    </p>
                  </div>
                </div>
              </div>
           
          );
        } else null;
      })}
      <div className="relative">
      <div className="flex fixed rounded-lg top-11 mt-8 right-0  flex-col w-[33%] mr-2 gap-3 pr-20 border-2 p-2 bg-slate-100  float-right font-bold  ">
        <p className="text-xs"> PRICE DETAILS ({getTotalCartItems()} items)</p>
        
        <p className="text-sm pl-1">Total MRP <span className="  pl-20">₹{getOldCartAmounts()} </span>  </p>
        <p className="text-sm pl-1">Platform Fee <span className="pl-16 text-green-500 ">FREE</span> </p>
        <p className="text-sm pl-1 ">Shipping Fee <span className="pl-16 text-green-500 ">FREE</span> </p>
        <p className="text-sm pl-1 ">Sub-Total <span className="pl-5 ">₹{getTotalCartAmounts()} </span>  <span className="pl-5 line-through">₹{getOldCartAmounts()}</span>  </p>
        <hr className="w-[120%] mt-1 m-auto h-1 rounded-lg bg-gray-600 border-0 " />
        <h3 className="text-sm p-1 pt-3 pb-3">Total Amount <span className="pl-12 font-bold ">₹{getTotalCartAmounts()} </span> </h3>
         <button className="flex w-[120%] font-bold justify-center tracking-wide border-pink-600 border-2 p-2 bg-pink-600 text-white">PLACE ORDER</button>
      
      </div>
      </div>
    </div>
  );
};

export default CartItemsList;


