import React from 'react'
import pic from './LoginPage.png'
import InputForm from './Form.js'
export default function Login() {

  return (
    <div className='container'>
    <div className='d-flex flex-column flex-md-row'>
      <div className='container card border-primary w-70 mt-5 mb-5 ms-3' style={{height:"85vh",width:"170vh"}}>
        <div className="col-md">
          <div className="card-body mx-5 mt-5" style={{ fontFamily: 'Inter' }}>
            <h2 className="card-title mt-5">Hi, Welcome Back!</h2>
            <p className="card-text" style={{ color: "#6a6a6a" }}>Please put your login credentials below to start using the chatbot</p>
            <InputForm />
            <p className="card-text mt-4 text-center" style={{ color: "#6a6a6a" }}>Don't have an account?
              <button type="button" className="btn btn-link">Sign up for free</button></p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <img src={pic} className="card-img img-fluid" style={{height:"95vh",width:"170vh"}} />
      </div>
    </div>
    </div>
  )
}
