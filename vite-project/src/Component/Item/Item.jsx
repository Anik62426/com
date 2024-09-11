import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa"
const Item = (props) => {
  return (
    <> 
    <div className="bg-white max-w-[1200px] ml-14">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-5xl lg:px-8">
          <div className=" grid grid-cols-1  gap-x-6 gap-y-10 ">
            <Link to={`/product/${props.id}`}>
              <div key={props.id} className="group relative drop-shadow-2xl">
                
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                 
                  <img
                    src={props.image}
                    alt=''
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                  
                </div>
                
                <div>
                  <div className='mt-4 flex justify-between'>
                    <h3 className="  text-gray-700">
                        {props.name}    
                    </h3>
                    <h2 className='flex pr-3'>{props.rating}<FaStar className='mt-1' color='#ffc107'/>
                    </h2>
                    </div>
                    <div className=' flex gap-2'>
                    <p className="mt-1 text-sm text-black-500 font-bold">₹ {props.new_price}</p>
                    <p className="mt-1 text-sm text-gray-500 line-through">₹ {props.old_price}</p>
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