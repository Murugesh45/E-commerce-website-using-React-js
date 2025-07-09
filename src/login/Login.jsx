import React, { useState } from 'react'
import "./Login.css"
import actionObj from '../actionObj' 
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
 
function Login() {
  const dispatch=useDispatch()
  const[user,setUser]=useState({
    username:"",
    
  })
   const[user1,setUser1]=useState({
    password:"",
    
  })

  const[valid,setValid]=useState()
  const[valid1,setValid1]=useState()
  
  
   
   



  const Start=()=>{
    if(user.username=="" && user1.password==""){
      setValid("username is required")
      setValid1("password is required")
      
      

    }
    else if(user1.password==""){
      setValid1("password is required")

    }
    
    else{
      dispatch(actionObj())
    }
    console.log(user.username,user1.password)
    
  
    

  }
  return (
    <div className='log'>
      <div className="log1">
         <div className="input1">
            <h1>Login</h1>
            <input type='text' placeholder='username' className='text' onChange={(e)=>{
              setUser({username: e.target.value})
            }}/>
            <span style={{color:"red", marginRight:"auto",position:"relative",bottom:"10px"}}>{valid}</span>
          
            <input type="password" placeholder='password 'className='pass'onChange={(e)=>{setUser1({password :e.target.value})}}/>
             <span style={{color:"red",marginRight:"auto"}}>{valid1}</span>
            
            <button onClick={Start}>Login</button>
            <p>Don't have an account?<Link to="/signup">create account</Link></p>
        </div>
      </div>
        
    </div>
  )
}

export default Login