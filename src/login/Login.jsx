import React, { useState } from 'react'
import "./Login.css"
import actionObj from '../actionObj' 
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from'axios'


function Login() {
  const dispatch=useDispatch()
  const[user,setUser]=useState({
    username:"",
    password:""
    
  })
   

  const[valid,setValid]=useState()
  const[valid1,setValid1]=useState()
  const[data,setData]=useState()

  
  
   
   



  const Start=(e)=>{
    e.preventDefault()
    var valid=true
    if(user.username=="" ){
      setValid("username is required")
      valid=false
    }else{setValid("")}
    if(user.password==""){
      setValid1("password is required")
      valid=false

    }else{setValid("")}
    
    if(valid){
     
        
      

      dispatch(actionObj())
    }
    
    
  
    

  }
  return (
    <div className='log'>
      <div className="log1">
         <div className="input1">
            <h1>Login</h1>
            <input type='text' placeholder='username' className='text' onChange={(e)=>{
              setUser({...user,username: e.target.value})
            }}/>
            <span style={{color:"red", marginRight:"auto",position:"relative",bottom:"10px"}}>{valid}</span>
          
            <input type="password" placeholder='password 'className='pass'onChange={(e)=>{setUser({...user,password :e.target.value})}}/>
             <span style={{color:"red",marginRight:"auto"}}>{valid1}</span>
            
            <button onClick={Start}>Login</button>
            <p>Don't have an account?<Link to="/signup">create account</Link></p>
            
            
        </div>
      </div>
      
      
        
    </div>
  )
}

export default Login