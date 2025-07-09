import React from 'react'
import { useSelector } from 'react-redux'
import "./Cart.css"

function Carts() {
  
  const value=useSelector((store)=>{
    return store.reducer1.cart})
  
  return (
    <div>
     {
      value.length > 0 ? <div>
        {
          value.map((ele)=>{
            return <div className='c3'>
              <div className="c1">
              <img src={ele.image} width={100} style={{margin: "50px"}}/>
             </div>
              <div className='c2'>
                <h2>{ele.title}</h2>
                <p><b>Price: </b>{ele.price}</p>
                <p><b>Rating: </b>{ele.rating.rate}</p>
              </div>
              </div>
          })
        }
        
         </div> : <div> <h4 style={{color:"green", margin:"30px", fontSize:"40px"}}> You don't have products on your Carts</h4></div>    }
        
    </div>
  )
}

export default Carts