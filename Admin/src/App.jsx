import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Addproduct from './Components/AddProduct/Addproduct'
import ListProduct from './Components/ListProduct/ListProduct'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/' element={<Addproduct/>}/>
      <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
      
    </div>
  )
}

export default App
