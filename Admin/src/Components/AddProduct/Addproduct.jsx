import React, { useState } from 'react'
import upload_area from '../../assets/upload_area.svg'



export default function AddProduct() {

  const[image,setImage] = useState(false);
  const[productDetail,setProductDetail] = useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:"",
    rating:""
  })
  // console.log(productDetail)
  const imageHandler = (e) => {
     setImage(e.target.files[0]);
  }
   
  const changeHandler = (e) =>{
    setProductDetail({...productDetail,[e.target.name]:e.target.value})
    console.log(e.target.value);
  }

  const Add_Product = async ()=>{
    
    let responseData;
    let product = productDetail;
    let formData = new FormData();
    formData.append('product',image);

    await fetch('https://ecommerce-backend-27wa.onrender.com/upload',{
      method: 'POST',
      headers: {
          Accept:'application/json',
      },
      body:formData,
    }).then((res)=> res.json()).then((data)=>{responseData=data})

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);
      await fetch('https://ecommerce-backend-27wa.onrender.com/addproduct',{
      method: 'POST',
      headers: {
          Accept:'application/json',
          'Content-Type':'application/json',

          
      },
      body:JSON.stringify(product),
    }).then((res)=>res.json()).then((data)=>{
      data.success?alert("product added"):alert("Failed")
    })
    }
  }

  return (
    <>
    
      <div className=" flex flex-col items-center justify-center ">

        <div className="border-b border-gray-900/10 pb-5">
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
           {/* Product Name */}
          <div className="sm:col-span-4">
            <h2 className='border-b border-gray-900/10 pb-5'>Add Products Into Database</h2>
              <div className="block text-sm  text-center font-medium leading-6 text-gray-900">
                Product Name
              </div>
              <div className="mt-2">
                <input
                  value={productDetail.name}
                  onChange={changeHandler}
                  name="name"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          
           {/* Original price */}
          
            <div className="sm:col-span-3">
              <div className="block text-sm text-center font-medium leading-6 text-gray-900">
              Original Price
              </div>
              <div className="mt-2 ">
                <input
                  value={productDetail.old_price}
                  onChange={changeHandler}
                  type="text"
                  name="old_price"
      
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           {/* Discount Price*/}
          
            <div className="sm:col-span-3">
              <div className="block text-sm text-center font-medium leading-6 text-gray-900">
              Discount Price
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  name="new_price"
                  value={productDetail.new_price}
                  onChange={changeHandler}
                  className="block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           {/* Category */}
          
            <div className="sm:col-span-3">
              <div className="block text-base text-center font-medium leading-6 text-gray-900">
                Category
              </div>
              <div className="mt-2">
                <select
                  value={productDetail.category}
                  onChange={changeHandler}
                  name="category"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>mens</option>
                  <option>women</option>
                  <option>kid</option>
                </select>
              </div>
            </div>
           
           {/* Rating */}

            <div className="sm:col-span-3">
              <div className="block text-sm text-center font-medium leading-6 text-gray-900">
              Rating
              </div>
              <div className="mt-2 ">
                <input
                  value={productDetail.rating}
                  onChange={changeHandler}
                  name="rating"
      
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
             
           {/* Product Photo */}


            <div className="col-span-full">
              <label htmlFor="Product Photo" className="block text-sm text-c font-medium leading-6 text-gray-900">
                Product Photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg  ">
                <div className="text-center"> 
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md "
                    > 
                      <img src={image?URL.createObjectURL(image):upload_area} className='mx-auto h-40  text-gray-300' ></img>
                    </label>
                    <input id="file-upload" onChange={imageHandler} name="file-upload" type="file" className="sr-only" />
        
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6 flex items-center justify-center gap-x-6">
        <button
          onClick={()=>{Add_Product()}}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
     
      </>
  )
}
