import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/Home'
import {Route,Routes} from 'react-router-dom'
import Product from "./product/Product"
import User from "./users/User"
import Navbar from "./navbar/Navbar"
import Login from"./login/Login"
import { useSelector } from 'react-redux'
import Connect from './Connect'
import ProductDetails from './ProductDetails'
import Carts from './Carts'
import Signup from './login/Signup'
import About from './about/About'



function App() {
  let Logined=useSelector((store)=>{
  return store.reducer.isLogined})
  

  return (
    <>
      <div>{
        Logined ? <Navbar /> : null




        }
    
              
        <Routes>
          <Route path= {"/"} element={ Logined ? <Home />: <Login />} />
          <Route path= {"/Product"} element={<Product />} />
          <Route path= {"/User"} element={<User />} />
          <Route path= {"/productDetails/:id"} element={<ProductDetails />} />
          <Route path= {"/Carts"} element={<Carts />} />
          <Route path= {"/signup"} element={<Signup />} />
          <Route path= {"/About"} element={<About />} />
        </Routes>
         
        
      </div>
      
    </>
  )
}

export default App
