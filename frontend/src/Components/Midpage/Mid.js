import React from 'react'
import pic from './Homepage__20058480_62400571.png'
import {Link} from "react-router-dom";

export default function mid() {
   return (
       <>
      <div className='d-flex'>
      <div style={{marginTop: '9%', marginLeft: '7%', fontSize: '110%'}}>
       <h1 style={{marginTop: '-69px',fontSize: '380%' }}>
       Finny
       </h1>
       <p style={{paddingTop: '20px'}}>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi 
          ut aliquip ex ea commodo consequat.Quis aute 
          iure reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint obcaecat cupiditat non proident,
          sunt in culpa qui officia deserunt mollit anim 
          id est laborum.
      </p>

     <button className="btn btn-primary mt-5" type="submit"><Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>Login</Link></button>
     <button className="btn btn-primary mx-4 mt-5" type="submit"><Link to="/signup" style={{ color: 'inherit', textDecoration: 'inherit'}}>Signup</Link></button>   
    </div>
    <div>
      <div><img src={pic} className="rounded mx-4" style={{width: '75%',marginTop: '7vh'}} /></div>
      <button className="btn btn-primary w-70 mt-5" style={{ marginLeft:'30vh'}}><Link to="/finny" style={{ color: 'inherit', textDecoration: 'inherit'}}>Try Finny!</Link></button>
    </div>
    </div>
 </>
   )
 }