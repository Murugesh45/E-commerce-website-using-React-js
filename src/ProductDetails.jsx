import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./ProductDetails.css"
import { useRef } from 'react'
import { Link } from 'react-router-dom'


function ProductDetails() {
  const data=useRef()
 
  
    let {id}=useParams();
    const pro=useSelector((store)=>{
      return store.reducer1.products.filter((data)=> data.id==id)

    })
   
  return (
    <div className='side'>
      <div className="side1">
        <img src={pro[0].image} width={200} />
      </div>
      <div className="side2">
      
      <h3> {pro[0].title}</h3>
      <p><b>category:</b>   {pro[0].category}</p>
      <p><b>price:</b>    {pro[0].price}</p>
      <p><b>description:  </b>   {pro[0].description}</p>
      <p><b>Rating:</b>    {pro[0].rating.rate}</p>
      <div >
      <Link to="/product"><button>Back to Products</button></Link>
      </div>
      </div>

    </div>
  )
}

export default ProductDetails