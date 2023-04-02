import React from 'react'
import pic from './LoginPage.png'
import InputForm from './Form.js'
export default function Login() {
  
  return (
    <div className='container card h-50 w-80' style={{ marginTop: "10%" }}>
      <div className="d-flex row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title mx-5">Hi, Welcome Back!</h5>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            <InputForm/>
          </div>
        </div>
        <div className="col-md-4">
          <img src={pic} className="img-fluid" />
        </div>
      </div>
    </div>
  )
}
