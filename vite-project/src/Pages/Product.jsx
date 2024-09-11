import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Skeletons from "../Component/Skeletons";


const Product = () => {
  // const {all_product}= useContext(ShopContext);

  const navigate = useNavigate();
  const { addToCart } = useContext(ShopContext);
  console.log(addToCart);
  const { productId } = useParams();
  const [all_products, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://ecommerce-backend-27wa.onrender.com/popularbyid", {
      method: "POST",
      body: JSON.stringify({
        id: productId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setLoading(false);
      });
  }, []);
  console.log(all_products);

  // console.log(productId)
  // console.log(all_products[0].name);
  // const product = all_product.find((e)=> e.id ===Number(productId));
  return (
    <div>
      <div className=" grid grid-cols-2">
        {loading && <Skeletons cards={8} />}
      </div>

      {all_products.map((object) => (
        <div key={object.id}>
          <div className=" flex items-center text-base text-gray-800 py-8 pl-10 gap-2 ">
            <>
              <button
                className=" border-2 bg-gray-600 text-white p-1 rounded-md border-gray-800"
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>
            </>
            Home / Shop / {object.category} / {object.name}
          </div>
          <div className="bg-white">
            <div className=" grid grid-cols-2">
              {/* <!-- Image gallery --> */}
              <div className="lg:grid lg:max-w-2xl lg:grid-cols-1 lg:gap-x-3 lg:px-2">
                <div className="hidden py-2 ml-4 lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-3 ">
                  <div className="aspect-h-2 aspect-w-3 h-[400px] my-2 overflow-hidden ">
                    <img
                      src={object.image}
                      alt="Model wearing plain gray basic tee."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="aspect-h-2 my-2 aspect-w-3 h-[400px] overflow-hidden ">
                    <img
                      src={object.image}
                      alt="Model wearing plain gray basic tee."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-2 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-2">
                    <div className="mt-5">
                      <h2 className="text-base font-bold text-gray-900">
                        PRODUCT DETAIL
                      </h2>

                      <div className="my-1 space-y-6">
                        <p>
                          Black solid faux leather jacket, has a mock collar,
                          two pockets, zip closure, long sleeves, straight hem,
                          polyester lining
                        </p>
                      </div>
                      <h2 className="text-base mt-3 font-bold my-1 text-gray-900">
                        Size & Fit
                      </h2>
                      <div className="my-1">
                        <p>The model (height 6') is wearing a size M</p>
                      </div>
                      <h2 className="text-base mt-3 font-bold  text-gray-900">
                        Material & Care
                      </h2>
                      <div className="my-1 flex flex-col">
                        <p>PU</p>
                        <p>Machine-wash</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Product info --> */}
              <div className="mx-auto w-[90vh] px-4 pb-16 pt-10 sm:px-6 lg:max-w-xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-10">
                {/* <!-- Options --> */}
                <div className="mt-4 lg:row-span-1 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>
                  <h1 className="text-xl pb-2 font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {object.name}
                  </h1>
                  <div className="flex py-2 items-center">
                    <p className="text-xl  tracking-tight text-gray-900">
                      <span className="font-bold"> RS </span> ₹
                      {object.new_price}
                    </p>
                    <p className="text-xl pl-3 tracking-tight line-through text-gray-900">
                      ₹{object.old_price}
                    </p>
                  </div>
                  <p className="text-green-600 font-bold">
                    inclusive of all taxes
                  </p>
                  {/* <!-- Reviews --> */}
                  <div className="mt-3 flex ">
                    <div className="flex">
                      <FaStar
                        size={40}
                        color={object.rating >= 1 ? "#ffc107" : "#ebe8df"}
                      />
                      <FaStar
                        size={40}
                        color={object.rating >= 2 ? "#ffc107" : "#ebe8df"}
                      />
                      <FaStar
                        size={40}
                        color={object.rating >= 3 ? "#ffc107" : "#ebe8df"}
                      />
                      <FaStar
                        size={40}
                        color={object.rating >= 4 ? "#ffc107" : "#ebe8df"}
                      />
                      <FaStar
                        size={40}
                        color={object.rating >= 5 ? "#ffc107" : "#ebe8df"}
                      />
                    </div>
                    <a
                      href="#"
                      className="ml-3 border-2 mt-2 text-lg font-medium text-grey-500"
                    >
                      117 reviews
                    </a>
                  </div>

                  <div className="mt-10">
                    <button
                      onClick={() => {
                        addToCart(object.id), toast.success("Added To Cart");
                      }}
                      // type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-slate-600 hover:bg-pink-500 px-8 py-3 text-base font-medium text-white "
                    >
                      Add to bag
                    </button>

                    <div className="space-y-4 pt-5">
                      <details
                        className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden "
                        open
                      >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                          <h2 className="text-lg font-medium text-gray-900">
                            PRODUCT DETAIL
                          </h2>

                          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                          Black solid faux leather jacket, has a mock collar,
                          two pockets, zip closure, long sleeves, straight hem,
                          polyester lining
                        </p>
                      </details>

                      <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                          <h2 className="text-lg font-medium text-gray-900">
                            Highlights
                          </h2>

                          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                          <ul>
                            <li>Hand cut and sewn locally</li>
                            <li>Dyed with our proprietary colors</li>
                            <li> Pre-washed & pre-shrunk</li>
                            <li>Ultra-soft 100% cotton</li>
                          </ul>
                        </p>
                      </details>
                    </div>

                    <div class="mx-auto flex-start bg-white rounded-lg  px-4 py-4  mt-2 max-w-sm ">
                      <div class="mb-1 tracking-wide px-4 py-4">
                        <h2 class="text-gray-800 font-semibold mt-1">
                          67 Users reviews
                        </h2>
                        <div class="border-b -mx-8 px-8 pb-3">
                          <div class="flex items-center mt-1">
                            <div class=" w-1/5 text-indigo-500 tracking-tighter">
                              <span>5 star</span>
                            </div>
                            <div class="w-3/5">
                              <div class="bg-gray-300 w-full rounded-lg h-2">
                                <div class=" w-7/12 bg-indigo-600 rounded-lg h-2"></div>
                              </div>
                            </div>
                            <div class="w-1/5 text-gray-700 pl-3">
                              <span class="text-sm">45%</span>
                            </div>
                          </div>
                          <div class="flex items-center mt-1">
                            <div class="w-1/5 text-indigo-500 tracking-tighter">
                              <span>4 star</span>
                            </div>
                            <div class="w-3/5">
                              <div class="bg-gray-300 w-full rounded-lg h-2">
                                <div class="w-1/5 bg-indigo-600 rounded-lg h-2"></div>
                              </div>
                            </div>
                            <div class="w-1/5 text-gray-700 pl-3">
                              <span class="text-sm">17%</span>
                            </div>
                          </div>
                          <div class="flex items-center mt-1">
                            <div class="w-1/5 text-indigo-500 tracking-tighter">
                              <span>3 star</span>
                            </div>
                            <div class="w-3/5">
                              <div class="bg-gray-300 w-full rounded-lg h-2">
                                <div class=" w-3/12 bg-indigo-600 rounded-lg h-2"></div>
                              </div>
                            </div>
                            <div class="w-1/5 text-gray-700 pl-3">
                              <span class="text-sm">19%</span>
                            </div>
                          </div>
                          <div class="flex items-center mt-1">
                            <div class=" w-1/5 text-indigo-500 tracking-tighter">
                              <span>2 star</span>
                            </div>
                            <div class="w-3/5">
                              <div class="bg-gray-300 w-full rounded-lg h-2">
                                <div class=" w-1/5 bg-indigo-600 rounded-lg h-2"></div>
                              </div>
                            </div>
                            <div class="w-1/5 text-gray-700 pl-3">
                              <span class="text-sm">8%</span>
                            </div>
                          </div>
                          <div class="flex items-center mt-1">
                            <div class="w-1/5 text-indigo-500 tracking-tighter">
                              <span>1 star</span>
                            </div>
                            <div class="w-3/5">
                              <div class="bg-gray-300 w-full rounded-lg h-2">
                                <div class=" w-2/12 bg-indigo-600 rounded-lg h-2"></div>
                              </div>
                            </div>
                            <div class="w-1/5 text-gray-700 pl-3">
                              <span class="text-sm">5%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-full px-4">
                        <h3 class="font-medium tracking-tight">
                          Review this item
                        </h3>
                        <p class="text-gray-700 text-sm py-1">
                          give your opinion about this item.
                        </p>
                        <button class="bg-gray-100 border border-gray-400 px-3 py-1 rounded  text-gray-800 mt-2">
                          write a review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
   
     

      <Footer />
    </div>
  );
};

export default Product;
