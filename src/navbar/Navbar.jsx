import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

function Navbar() {
  const dispatch=useDispatch()
  const Stop=()=>{

    const actionObj1={
      type :"logout",
      value: false

    }
    dispatch(actionObj1)

  }


  
  const menuRef = useRef();
  const cancel=useRef();
  const menu=useRef()

  const toggleMenu = () => {
    
   
    menuRef.current.classList.add('active')
    
    
    cancel.current.style.display="block";
    cancel.current.style.marginLeft="auto";
    menu.current.style.display="none";
    
    
    };
    const con=()=>{
      menuRef.current.classList.remove('active')
      cancel.current.style.display="none";
      menu.current.style.display="flex";

    }
  return (

    
        <div className="head">
        <div className="first">
            <h2>eCommKart</h2>
        </div>
        <div className="second">
            < Link to="/">Home</Link>
            < Link to="/About">About</Link>
            < Link to="/Product">Products</Link>
            
            <Link to="/Carts">Carts</Link>
            
           <Link to="/"> <button onClick={Stop}>Logout</button></Link>
        </div>
        <div className="menu-icon" ref={menu} >
        <i className="bi bi-list" onClick={toggleMenu}></i>
      </div>
      <div className="menu-icon1" ref={cancel}>
       < i className="bi bi-x-square" onClick={con}></i>
      </div>

      <div className="responsive-menu" ref={menuRef} >
        
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Product">Products</Link>
        
        <Link to="/Carts">Carts</Link>
        
        <Link to="/">
          <button onClick={Stop} >Logout</button>
        </Link>
        
        
      </div>

    </div>
  )
}

export default Navbar