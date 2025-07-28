import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"


function Signup() {
  

  
  let[sign,setSign] =useState()
  
  let[sign1,setSign1] =useState()
  let[sign2,setSign2] =useState()
  let[sign3,setSign3] =useState()
  let[sign4,setSign4] =useState()
  
  const[name1,setName]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:""

   
  })
  var value=true;
 
 
  const signup=(e)=>{
    e.preventDefault()
    if(name1.name===""){
      setSign("name is required")
      value=false
      
    }else{setSign("")
      

    }

    if(name1.email===""){
      setSign1("email is required")
      value=false
    }else{setSign1("")}
    if(name1.password===""){
      setSign2("password is required")
      value=false

    }else{setSign2("")}
    if(name1.cpassword===""){
      setSign3("confirm password is required")
      value=false
    }else{setSign3("")}
    
    
    if(value) {
      
      setSign4("Account is created")
     
      

    }
    
    
  


  }
  return (
    <div className="form1">
        <form className='form'>
          <h1>Signup</h1>
            <label>Name*</label>
            <input type="text" onChange={(e)=>{setName({...name1,name: e.target.value})}} />
            <span style={{color:"red"}}>{sign}</span>
            <label>Email*</label>
            <input type="email"onChange={(e)=>{setName({...name1,email: e.target.value})}}/>
            <span style={{color:"red"}}>{sign1}</span>
            <label>Password*</label>
            <input type="password" onChange={(e)=>{setName({...name1,password: e.target.value})}}/>
            <span style={{color:"red"}}>{sign2}</span>
            <label>Confirm Password*</label>
            <input type="password" onChange={(e)=>{setName({...name1,cpassword: e.target.value})}}/>
            <span style={{color:"red"}}>{sign3}</span>
            
            <Link to =""><button onClick={signup}>Create Account</button></Link>
            <span style={{color:"green", 
               position:"relative", bottom:"20px"}}>{sign4}</span>
            <Link to ="/">Back to Login page</Link>
        </form>
    </div>
  )
}

export default Signup