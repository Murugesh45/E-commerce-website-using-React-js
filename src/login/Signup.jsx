import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Signup() {
  
  let[sign,setSign] =useState()
  let[sign1,setSign1] =useState()
  let[sign2,setSign2] =useState()
  let[sign3,setSign3] =useState()
  let[sign4,setSign4] =useState()
  const[name,setName]=useState({
    name:"",
   
  })
 const[name1,setName1]=useState({
  email:""
 })
  const[name2,setName2]=useState({
  password:""
 })
  const[name3,setName3]=useState({
  confirmpassword:""
 })
  const signup=()=>{
    if(name.name===""){
      setSign("name is required")
      
    }
    else if(name1.email===""){
      setSign1("email is required")
      
    }
    else if(name2.password===""){
      setSign2("password is required")

    }
    else if(name3.confirmpassword===""){
      setSign3("confirm password is required")
    }
    else{
      setSign4("Account is created")

    }

  }
  return (
    <div>
        <form className='form'>
          <h1>Signup</h1>
            <label>Name*</label>
            <input type="text" onChange={(e)=>{setName({name: e.target.value})}} />
            <span style={{color:"red"}}>{sign}</span>
            <label>Email*</label>
            <input type="email"onChange={(e)=>{setName1({email: e.target.value})}}/>
            <span style={{color:"red"}}>{sign1}</span>
            <label>Password*</label>
            <input type="password" onChange={(e)=>{setName2({password: e.target.value})}}/>
            <span style={{color:"red"}}>{sign2}</span>
            <label>Confirm Password*</label>
            <input type="password" onChange={(e)=>{setName3({confirmpassword: e.target.value})}}/>
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