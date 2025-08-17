import React, { useState } from 'react'
import "./Login.css"
import actionObj from '../actionObj' 
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from'axios'


function Login() {
  const dispatch=useDispatch()
  const[username,setUsername]=useState()
  const[password,setPassword]=useState()
   
 const[error,setError]=useState()
 const[fail,setFail]=useState()
 

  
  
   
   



  const Start=(e)=>{
    e.preventDefault()
    
    
    
     
    axios.post("http://localhost:5000/login",{username,password})
    .then((res)=>{
      console.log("satisfied")
      if(res.data=="success"){
        dispatch(actionObj())

      }
      if(res.data=="fail"){
        setError("username is not valid")

      }
      else{
        setError("")
      }
       if(res.data=="failure"){
        setFail("wrong password")

      }
      
    })
    .catch(()=>{
      alert("wrong")
    })
      

      
    
    
    
  
    

  }
  return (
    <div className='log'>
      <div className="log1">
         <div className="input1">
            <h1>Login</h1>
            <input type='text' placeholder='username' className='text' onChange={(e)=>{ setUsername(e.target.value)

            }}/>
           
            <span style={{color:"red", marginRight:"150px", position:"relative",bottom:"10px"}}>{error}</span>
            
          
            <input type="password" placeholder='password 'className='pass'onChange={(e)=>{setPassword(e.target.value)}}/>
            
            <span style={{color:"red",marginRight:"190px"}}>{fail}</span>
             
            
            <button onClick={Start}>Login</button>
            <p>Don't have an account?<Link to="/signup">create account</Link></p>
            
            
        </div>
      </div>
      
      
        
    </div>
  )
}

export default Login