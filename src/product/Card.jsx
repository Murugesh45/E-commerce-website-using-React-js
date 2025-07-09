import React from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom'
import CartDetails from '../cardDetails'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { useSelector } from 'react-redux'


function Card({products}) {
  const dispatch=useDispatch();
  const cart=useRef()
  const{image,title,price,id}=products
  const navigate=useNavigate()
  const product1=(id)=>{
    navigate(`/productDetails/${id}`)

  }
  const value=useSelector((store)=>{
      return store.reducer1.cart})
  const Carte=()=>{
    CartDetails(products,dispatch)
    
    
  
  }
const remove=(id)=>{
  dispatch({
    type:"remove",
    value: id
  })
}
  

  
  
  return (
     <div className='dat'>
      
        <img src={image} width={"100%"} height={"200px"} />
        <h4>{title}</h4>
        <p> ${price}</p>
        <button onClick={()=>{product1(id)}}>Product Detail</button>
        {
          value.length==0 ? (<button onClick={Carte}  className='btn1'>add to cart</button>)
        : value.filter((pro)=>pro.id==id).length > 0 ? (<button   className='btn' onClick={()=>remove(id)}>remove from cart</button> ):
        <button onClick={Carte}  className='btn1'>add to cart</button>}
        
        
        
        
        
    </div>
  )
}


export default Card