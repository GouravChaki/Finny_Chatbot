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
       <p style={{paddingTop: '20px'}}>
       Welcome! My name is Finny and I'm here to help you with your stock-market related issues. 
       Use me for recommendations on stock based on how much you want to invest. 
       I can also predict future values of stock and compare two companies based on how they’ll do in the next couple of days. 
       Have fun exploring!
      </p>

     <button className="btn btn-primary mt-5" type="submit"><Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>Login</Link></button>
     <button className="btn btn-primary mx-4 mt-5" type="submit"><Link to="/signup" style={{ color: 'inherit', textDecoration: 'inherit'}}>Signup</Link></button>   
    </div>
    <div>
      <div><img src={pic} className="rounded mx-4" style={{width: '75%',marginTop: '5vh'}} /></div>
      <button className="btn btn-primary w-70 mt-3" style={{ marginLeft:'30vh'}}><Link to="/finny" style={{ color: 'inherit', textDecoration: 'inherit'}}>Try Finny!</Link></button>
    </div>
    </div>
 </>
   )
 }