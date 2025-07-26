import React from 'react'
import axios from "axios"
import {useState} from "react"
import Card from  './Card'
import "./Product.css"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


function Product() {

  useEffect(()=>{
    getProducts()

  },[])
  const product=useSelector((store)=>{
    return store.reducer1.products
  })
  const dispatch=useDispatch()

       const actionObj2=(data)=>{
        return{
          type:"products",
          value: data
        }
       }
  
  const getProducts= ()=>{
    var promise= axios.get('https://fakestoreapi.com/products')
    promise.then((res)=>{
      console.log(res.data)
      dispatch(actionObj2(res.data))
    }).catch((error)=>{
      console.log(error)
    })
    


  }
  const electronics=()=>{
      var promise= axios.get('https://fakestoreapi.com/products/category/electronics')
    promise.then((res)=>{
      console.log(res.data)
      dispatch(actionObj2(res.data))
    }).catch((error)=>{
      console.log(error)
    })

    }
    const Menswear=()=>{
      var promise= axios.get("https://fakestoreapi.com/products/category/men's clothing")
    promise.then((res)=>{
      console.log(res.data)
      dispatch(actionObj2(res.data))
    }).catch((error)=>{
      console.log(error)
    })

    }
    const Womenswear=()=>{
      var promise= axios.get("https://fakestoreapi.com/products/category/women's clothing")
    promise.then((res)=>{
      console.log(res.data)
      dispatch(actionObj2(res.data))
    }).catch((error)=>{
      console.log(error)
    })
    }
    
  return (
    <div className='api'>
      <div className="pro">
         <div>
          <input type="radio" name="product" defaultChecked onChange={getProducts}/>
          <label>All</label>

         </div>
         <div>
          <input type="radio" name="product" onChange={electronics} />
          <label>Electronics</label>
         </div>
                  <div>
          <input type="radio" name="product" onChange={Menswear}/>
          <label>Menswear</label>
         </div>
                  <div>
          <input type="radio" name="product" onChange={Womenswear} />
          <label>Womenswear</label>
         </div>
         </div>

    
    <div className='card'>
       
{ product.length>0 ?
        product.map(function(data){
          return <Card products={data}/>

        }) : <div> <h3>Loading...</h3></div>

      
    

}
    

    </div>
    
    </div>
   
    
 )

  }
  


export default Product