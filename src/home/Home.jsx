import React from 'react'
import "./Home.css"
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>
    <div className="nav">
            <img src="https://rukminim2.flixcart.com/flap/92/92/image/29327f40e9c4d26b.png?q=100" alt="" />
            
            <img src="https://rukminim2.flixcart.com/flap/92/92/image/22fddf3c7da4c4f4.png?q=100" alt="" />
            <img src="https://rukminim2.flixcart.com/fk-p-flap/92/92/image/0d75b34f7d8fbcb3.png?q=100" alt="" />
            <img src="https://rukminim2.flixcart.com/flap/92/92/image/69c6589653afdb9a.png?q=100" alt="" />
            <img src="https://rukminim2.flixcart.com/flap/92/92/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
            <img src="https://rukminim2.flixcart.com/fk-p-flap/92/92/image/0139228b2f7eb413.jpg?q=100" alt="" />
            <img src="https://rukminim2.flixcart.com/flap/92/92/image/71050627a56b4693.png?q=100" />
            <img src="https://rukminim2.flixcart.com/flap/92/92/image/dff3f7adcf3a90c6.png?q=100" alt="" />
            <img src="https://rukminim2.flixcart.com/fk-p-flap/92/92/image/05d708653beff580.png?q=100" alt="" />
            
            
          
        </div>
        
        <div className="content">
            <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/5b309e98775e22e4.jpg?q=60" />
            
        </div>
        <div className="content1">
            <div className="nav3">
                <div className="con">
                <h1>Men's Fashion</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad expedita, accusamus dolor totam quam explicabo aliquid </p></div>
                 
                 
            </div>
            
            <div className="nav2">
                <div className="nav4">
                    <div className="con1">
                    <h1>Women's Fashion</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p></div>
                </div>
                <div className="nav5">
                    <div className="con2">
                    <h1>Trendy Fashion</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p></div>
                </div>
                

            </div>
        </div>
        <div className="center">
            <div className="center1"></div>
            <div className="center2"></div>
        </div>
         <div className="center">
            <div className="center1"></div>
            <div className="center2"></div>
        </div>
         <div className="center cen">
            <div className="center1">
                <img src="https://imageio.forbes.com/specials-images/imageserve/5fd00ea644cd62376ce2b6c1/In-this-photo-illustration-a-13inch-Macbook-pro-seen---/960x0.jpg?height=474&width=711&fit=bounds"/>
            </div>
            <div className="center2">
                <h1>MacBook Pro</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deserunt!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, laboriosam nostrum. Temporibus quasi labore sint quibusdam, aliquam nobis inventore recusandae quas in, excepturi quia rem neque adipisci minus, nihil exercitationem?
                    </p>
                <button>More Details</button>
                </div>
        </div>
        <div className="center4">
         <div className="center ">
            <div className="center2">
                <h1>Samsung Galaxy S24 Ultra</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deserunt!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, laboriosam nostrum. Temporibus quasi labore sint quibusdam, aliquam 

                </p>
                <button>More Details</button>
                </div>
            <div className="center1">
                <img src="https://i.ytimg.com/vi/GHZwRPskGc4/sddefault.jpg"/>
            </div>
            
            
          </div>
        </div>
        <div className="footer">
  <div className="footer-content">
    <div className="footer-section ">
      <h3>eCommKart</h3>
      <p>Your one-stop shop for fashion, electronics, and more. Quality products, unbeatable prices.</p>
    </div>
    <div className="footer-section links">
      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to ="/About">About</Link></li>
        <li><Link to="/Product">Products</Link></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div className="footer-section contact">
      <h4>Contact Us</h4>
      <p>Email: support@ecommkart.com</p>
      <p>Phone: +91 98765 43210</p>
      <div className="socials">
        <a href="#"><i className="bi bi-facebook"></i></a>
        <a href="#"><i className="bi bi-instagram"></i></a>
        <a href="#"><i className="bi bi-twitter"></i></a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    &copy; 2025 eCommKart. All rights reserved.
  </div>
  
</div>


    </div>
                
     
  )
}

export default Home