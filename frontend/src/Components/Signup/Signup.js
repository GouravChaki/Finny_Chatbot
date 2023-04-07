import React from 'react'
import pic from './SignUpPage_SignUP2.png'
import Details from './Details.js'
import { Link } from 'react-router-dom'
export default function Signup(props) {   return (
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
          <div
            className="m-5 d-flex justify-content-center"
            style={{ width: "10%", height: "7%" }}
          >
             <Link to="/"
              className="btn btn-primary shadow-lg mb-5 w-100 h-100"
              style={{ borderRadius: "50px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ margin: "6px" }}
                width="25"
                height="25"
                fill="white"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </Link>
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

