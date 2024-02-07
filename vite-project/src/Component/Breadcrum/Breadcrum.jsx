import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
const {product} = props;
  return (
    <div className=' flex items-center text-base text-gray-800 py-8 pl-10 gap-2 '>
        HOME / SHOP /{product.category} / {product.name}
    </div>
  )
}

export default Breadcrum