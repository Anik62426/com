import React, { useContext,useEffect,useState,useCallback } from 'react'
import Footer from '../Component/Footer/Footer'
import Item from '../Component/Item/Item'
import toast from 'react-hot-toast'
import {  useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeletons from '../Component/Skeletons'

const ShopCategory = (props) => {
 
const[all_product,setAll_Product] = useState([])
const[highPrice,sethighPrice] = useState(false)
const[lowPrice,setlowPrice]=useState(false)
const[sliceProduct,setsliceProduct]=useState(false)
const[dateProduct,setdateProduct]=useState(false)
const [loading, setLoading] = useState(true);
const navigate = useNavigate();

useEffect(() => {
  
 fetch(`https://ecommerce-backend-27wa.onrender.com/search/${props.category}`)
        .then((response)=>response.json())
        .then((data)=>{setAll_Product(data)
        setLoading(false);})   
}, [props.category])
if(dateProduct){
  all_product.sort((a,b)=>b.id-a.id)
  console.log(all_product)
}
if(sliceProduct){
   all_product.sort((a,b)=>b.rating-a.rating)
}

if(highPrice){
  all_product.sort((a,b)=>a.new_price-b.new_price)
  }
  console.log(highPrice,"high to low")
 if(lowPrice){
  all_product.sort((a,b)=>b.new_price-a.new_price)
  }  
  console.log(lowPrice,"low to high")
  
 
    
  // const {all_product} = useContext(ShopContext)
  return (
    <>
    <div>
     <img src={props.banner} loading='lazy' className=' cursor-pointer' alt="hell" onClick={()=> navigate("/")}/>
     <div className='flex mt-3 pt-2 pl-2 flex-row-reverse  border-black border rounded-lg p-2 '>
      
     <button className='border-2 bg-gray-700 text-white p-1 rounded-md border-gray-800' onClick={()=>{setdateProduct((prev)=>!prev)
   sethighPrice(false)
   setlowPrice(false) 
    setsliceProduct(false)
    toast.success("Newest First")}}  >
     Newest First  {dateProduct === true ? (
                          <hr className="w-{100%} h-1  rounded-lg bg-white" />
                          ) : (
                          <></>
                        )}</button>

     <button className='border-2 bg-gray-700 text-white p-1 rounded-lg border-gray-800 mr-1' onClick={()=>{setsliceProduct((prev)=>!prev)
    setlowPrice(false) 
    sethighPrice(false)
    setdateProduct(false)
    toast.success(" Sort By Popularity")}}  >
      Popularity {sliceProduct === true ? (
                          <hr className="w-{100%} h-1  rounded-lg bg-white " />
                          ) : (
                          <></>
                        )}</button>

     <button className='border-2 bg-gray-700 text-white p-1 rounded-lg border-gray-800 mr-1' onClick={()=>{setlowPrice((prev)=>!prev)
    sethighPrice(false)
    setsliceProduct(false)
    setdateProduct(false)
    toast.success("High to Low")}} >
      Price -- High to Low{lowPrice === true ? (
                          <hr className="w-{100%} h-1  rounded-lg bg-white " />
                          ) : (
                          <></>
                        )}</button>

     <button className='border-2 bg-gray-700 text-white p-1 rounded-lg border-gray-800 mr-1' onClick={()=>{sethighPrice((prev)=>!prev)
    setlowPrice(false)
    setsliceProduct(false)
    setdateProduct(false)
    toast.success("Low To High")}}  >
      Price -- Low to High{highPrice === true ? (
                          <hr className="w-{100%} h-1  rounded-lg bg-white" />
                          ) : (
                          <></>
                        )}</button>
     <p className='px-4 py-1 font-extrabold cursor-progress'>Sort By</p>
     </div>
    </div>
    <div className='grid grid-cols-4 max-w-[95%] lg:mx-4 mx-28 mb-4'>
      { loading && <Skeletons cards = {8}/>}
      
      { all_product.map((item)=>{
       
        return <Item id={item.id} name ={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price} rating={item.rating}/>
       
      })} 
    </div>
    <Footer/> 
    </>
  )
}

export default ShopCategory