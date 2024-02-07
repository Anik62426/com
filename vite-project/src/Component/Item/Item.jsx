import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <>
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-10 ">
            <Link to={`/product/${props.id}`}>
              <div key={props.id} className="group relative">
                
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                 
                  <img
                    src={props.image}
                    alt=''
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                  
                </div>
                
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href=''>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {props.name}
                      </a>
                    </h3>
                    <div className=' flex gap-2'>
                    <p className="mt-1 text-sm text-gray-500">₹{props.new_price}</p>
                    <p className="mt-1 text-sm text-gray-500 line-through">₹{props.old_price}</p>
                    </div>
                   
                  </div>
                </div>
              </div>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item