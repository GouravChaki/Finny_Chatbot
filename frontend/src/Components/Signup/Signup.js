import React from 'react'
import pic from './SignUpPage_SignUP2.png'
import Details from './Details.js'

export default function Signup() {   return (
    <div className='container'>
    <div className='d-flex flex-column flex-md-row'>
      <div className='container card border-primary w-70 mt-5 mb-5 ms-3'>
        <div className="col-md">
          <div className="card-body mx-5 mt-5" style={{ fontFamily: 'Inter' }}>
            <h2 className="card-title mt-5" >Create your account</h2>
            <p className="card-text" style={{ color: "#6a6a6a" }}>You're one step away from joining our 
            ChatBOT family!</p>
            <Details />
            <p className="card-text mt-4 text-center" style={{ color: "#6a6a6a" }}>Already a member?
              <button type="button" className="btn btn-link">Login</button></p>
          </div>
        </div>
      </div >
      <div className="mt-2">
       <img src={pic} className="card-img img-fluid" style={{marginTop: '1.2%',height:"95vh",width:"200vh"}} />
    </div>
    </div>
    </div>

  )
}

