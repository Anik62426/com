import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Footer from '../Component/Footer/Footer'
import Item from '../Component/Item/Item'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <>
    <div>
     <img src={props.banner} alt="hell"  />
    </div>
    <div className='grid grid-cols-4 lg:mx-4 mx-28 my-4'>
      {all_product.map((item)=>{
       if(props.category === item.category){
        return <Item id={item.id} name ={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price} />
       }
       else{
        return null;
       }
      })}
    </div>
    <Footer/> 
    </>
  )
}

export default ShopCategory