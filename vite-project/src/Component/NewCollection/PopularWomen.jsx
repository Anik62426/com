import { useEffect, useState } from "react";
// import products from '../assets/new_collections'
import { Link } from "react-router-dom";

export default function NewCollection() {
  const [new_collection, setnew_collection] = useState([]);
  useEffect(() => {
    fetch("https://e-com-uryk.onrender.com/popularinwomen")
      .then((response) => response.json())
      .then((data) => setnew_collection(data));
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 min-[320px]:py-4 sm:px-6 sm:py-4 md:py-12 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl text-center font-bold tracking-tight text-gray-900">
           POPULAR IN WOMEN
           <hr className="w-60 mt-1 m-auto h-1.5 rounded-lg bg-gray-600 border-0 " />
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {new_collection.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                
                <img
                  src={product.image}
                  alt=""
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <div className=" flex gap-2">
                    <p className="mt-1 text-sm text-gray-500">
                      ₹{product.new_price}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 line-through">
                      ₹{product.old_price}
                    </p>
                  </div>
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.old_price}</p> */}
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
