import React from 'react'
import pic from './LoginPage.png'
import Form from './Form.js'
export default function Login() {

  const Form = () =>{
    <form>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
    </form>
  }
  return (
    <div className='container card h-50 w-80' style={{ marginTop: "10%" }}>
      <div className="d-flex row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title mx-5">Hi, Welcome Back!</h5>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            <Form/>
          </div>
        </div>
        <div className="col-md-4">
          <img src={pic} className="img-fluid" />
        </div>
      </div>
    </div>
  )
}
