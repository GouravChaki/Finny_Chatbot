import { Link } from 'react-router-dom'
import React, { useState,useContext } from 'react'
import './Navbar.css'
import Context from '../Context_api/Context'
const Navbar = () => {
   const a=useContext(Context)
    const changeBg = () => {
      if (window.scrollY >= 100){
        a.setNavbar(true);
      }else{
        a.setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBg);
    return (
       <>
       <nav 
         className={
          a.navbar 
             ? "navbar scroll navbar-expand-sm fixed-top" 
             : "navbar navbar-expand-sm fixed-top"
         }
       >
        
        <a className='navbar-brand'>
            <h5>Finny</h5>
        </a>
        <div>
        <div class="navbar-nav">
          <div className='nav-item'>
             <Link class="nav-link" to="/">Home</Link>
          </div>
          <div className='nav-item'>
             <Link class="nav-link" to="/login" >Login</Link>
          </div>
          <div className='nav-item'>
             <Link class="nav-link" to="/signup">Sign Up</Link>
          </div>
          <div className='nav-item'>
             <Link class="nav-link" to="/about">About Us</Link>
          </div>
          <div className='nav-item'>
             <Link class="nav-link" to="/finny">Try Finny!</Link>
          </div>
          {/* <div className='nav-item'>
             <Link class="nav-link" to="/search_history">Search History</Link>
          </div> */}
          {/* </div>
              <Link class="nav-link" to="/">Home</Link>
              <Link class="nav-link" to="/login" >Login</Link>
              <Link class="nav-link" to="/signup">Sign Up</Link>
              <a class="nav-link" href="#">About Us</a>
              <a class="nav-link" href="#">Contact Us</a>
            </div> */}
         </div>
        </div>
       </nav>
       </>
    );
}

export default Navbar;