import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { toast } from 'react-hot-toast'
import { ImCross } from "react-icons/im";

const CartItemsList = () => {
  const { getTotalCartAmounts, all_product, cartItems, removeFromCart ,addToCart,getTotalCartItems,getOldCartAmounts,getDiscountCartAmounts } =
    useContext(ShopContext);
  return (
    <div>
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            
            <div key={e.id}> 

              <div className=" w-[60%] ml-16 mt-3 rounded border shadow-xl ">
                <button
                  onClick={() => {
                    removeFromCart(e?.id);
                    toast.error("Removed From Cart")
                  }}
                  className="float-right px-6 pt-3 text-2xl text-black hover:text-gray-600"
                >
                  <ImCross />
                </button>
                <div className="flex ">
                  <div className=" ">
                    <img
                      src={e?.image}
                      alt="image"
                      className=" w-24  m-2 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                    />
                  </div>

                  <div className=" pl-5 ">
                    <p className=" text-sm font-bold  pt-2 text-gray-900">
                      {e?.name}
                    </p>
                    <div className="flex gap-2 items-center"> 
                 <button
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className=" text-3xl text-black hover:text-gray-600"
                >
                  -
                </button>
                <p className=" text-sm p-0.5 rounded-md border-2 border-gray-500 ">Qty : {cartItems[e.id]}</p>
               <button
                  onClick={() => {
                    addToCart(e?.id);
                  }}
                  className="text-3xl text-black hover:text-gray-600"
                >
                  +
                </button>
                    </div>
                    <div className="flex gap-4">
                      <p className="pt-2 text-sm">₹{e?.new_price}</p>
                      <p className="pt-2 line-through text-gray-500 text-sm">
                        ₹{e?.old_price}
                      </p>
                      <p className="pt-2 text-sm text-green-400">64% OFF</p>
                    </div>
                    <p className=" pt-2 text-sm font-bold ">
                      Total ₹  {e?.new_price * cartItems[e.id]}
                    </p>
                  </div>
                </div>
              </div>
              </div>
          );
        } else null;
      })}
       
       <div className="mt-8 fixed top-11 right-11 flex justify-end border-t border-gray-100 pt-8">
          <div className=" w-[50vh] max-w-lg space-y-4 mr-12 ">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>₹ {getOldCartAmounts()}</dd>
              </div>

              <div className="flex justify-between">
                <dt>Tax</dt>
                <dd>₹ 0 </dd>
              </div>

              <div className="flex justify-between">
                <dt>Discount</dt>
                <dd>-₹ {getDiscountCartAmounts()}</dd>
              </div>

              <div className="flex justify-between text-base font-bold ">
                <dt>Total</dt>
                <dd>₹ {getTotalCartAmounts()}</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-green-100 px-2.5 py-0.5 text-green-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ms-1 me-1.5 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p className="whitespace-nowrap text-xs ">2 Discounts Applied</p>
              </span>
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="block rounded bg-gray-700 px-28 py-3 text-sm text-gray-100 transition hover:bg-gray-800"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CartItemsList;


