import React, { useState,useEffect } from 'react'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
  const[allproducts,setAllProducts]= useState([]);
 
  const fetchInfo = async()=>{
    await fetch('https://e-com-uryk.onrender.com/allproducts').then((res)=>res.json()).then((data)=>{setAllProducts(data)})
  }

  useEffect(()=>{
    fetchInfo();
  },[])
   
  const remove_product = async(id)=>{
    await fetch('https://e-com-uryk.onrender.com/removeproduct',{
      method:'POST',
      headers:{
        Acceept: 'application/json',
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <>
    <h1 className=' text-2xl flex justify-center' >All Products</h1>
 
    <div className=' grid grid-col-1fr 3fr 1fr 1fr 1fr 1fr justify-center items-center'>
    <div className='flex items-center  my-5 '>
    <p className='pl-2 text-xl font-bold' >Products</p>
    <br/>
      <p className='pl-14 pr-2 ' >Title</p>
      <br/>
      <p className='px-2' >Original Price</p>
      <br/>
      <p className='px-2' >Discount Price</p>
      <p className='pl-2' >Category</p>
      {/* <p>Remove</p>  */}
     </div> 
     
    
      <hr/>
      {allproducts.map((product,index)=>{
        return <div key={index} className='flex items-center gap-5 my-5 ' >
        <img src={product.image} alt="" className='h-26 w-24  rounded-md border border-gray-200'/>
        <p className=' text-base font-medium text-gray-900'> {product.name} </p>
        <p className=' text-base font-medium text-gray-900' > {product.old_price} </p>
        <p className=' text-base font-medium text-gray-900' > {product.new_price} </p>
        <p className=' text-base font-medium text-gray-900' > {product.category} </p>
        <img onClick={()=>{ remove_product(product.id)}} src={cross_icon } alt=""className='cursor-pointer' />
        </div>
        
      })}
     
     </div>
    </>
  )
}

export default ListProduct