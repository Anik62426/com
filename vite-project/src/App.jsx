import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSIgnup from './Pages/LoginSIgnup';
import men_banner from './Component/assets/banner_mens.png'
import women_banner from './Component/assets/banner_women.png'
import kid_banner from './Component/assets/banner_kids.png'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>   
      <Route path='/men' element={<ShopCategory category="men"  banner={men_banner} />}/> 
      <Route path='/women' element={<ShopCategory category="women" banner={women_banner}/>}/> 
      <Route path='/kid' element={<ShopCategory category="kid" banner={kid_banner}/>}/>
      <Route path='/product' element={<Product/>}>
       <Route path=':productId' element={<Product/>}/>
      </Route> 
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSIgnup/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App