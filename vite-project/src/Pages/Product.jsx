import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Component/Breadcrum/Breadcrum'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'
import Footer from '../Component/Footer/Footer'
const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId} = useParams();

  const product = all_product.find((e)=> e.id ===Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Footer/>
    </div>
  )
}

export default Product