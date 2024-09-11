import React, { createContext, useEffect, useState } from 'react'


export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [all_product,setAll_Product] = useState([]);
    const [cartItems,setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('https://ecommerce-backend-27wa.onrender.com/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('https://ecommerce-backend-27wa.onrender.com/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            })
            .then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[])
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://ecommerce-backend-27wa.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=> response.json())
            .then((data)=>console.log(data));
        }
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://ecommerce-backend-27wa.onrender.com/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=> response.json())
            .then((data)=>console.log(data));
        }
    }


    const getTotalCartAmounts = () =>{

        let totalsAmounts = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            const itemInfo = all_product.find((product) => product.id === Number(item));
            if (itemInfo) {
              totalsAmounts += itemInfo.new_price * cartItems[item];
            } else {
              console.warn(`Product with ID ${Number(item)} not found`);
            }
          }
        }
        return totalsAmounts;
       
    }

    const getOldCartAmounts = () =>{
      
        let totalsAmounts = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            const itemInfo = all_product.find((product) => product.id === Number(item));
            if (itemInfo) {
              totalsAmounts += itemInfo.old_price * cartItems[item];
            } else {
              console.warn(`Product with ID ${Number(item)} not found`);
            }
          }
        }
        return totalsAmounts;

    }

    const getDiscountCartAmounts = () =>{
        let totalsAmounts = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            const itemInfo = all_product.find((product) => product.id === Number(item));
            if (itemInfo) {
                totalsAmounts += itemInfo.old_price*cartItems[item] - itemInfo.new_price*cartItems[item];
            } else {
              console.warn(`Product with ID ${Number(item)} not found`);
            }
          }
        }
        return totalsAmounts;

       
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+= cartItems[item];
            }
        }
        console.log(totalItem)
        return totalItem;
    }
   
    const contextValue = { all_product,cartItems,addToCart,removeFromCart,getTotalCartAmounts,getTotalCartItems,getOldCartAmounts,getDiscountCartAmounts };

    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;