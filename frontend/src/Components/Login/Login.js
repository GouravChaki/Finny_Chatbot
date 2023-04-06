import React from "react";
import { Link } from 'react-router-dom'
import pic from "./LoginPage.png";
import Button from './Button_arrow'
import Form from "./Form.js";

function Login(props) {
  return (
    //<div className='container'>
    <div className="d-flex flex-column flex-md-row">
      <div className="container card border-primary w-70 mt-5 mb-5 ms-3">
        <div className="col-md">
          <div className="card-body mx-5 mt-5" style={{ fontFamily: "Inter" }}>
            <h2 className="card-title mt-5">Hi, Welcome Back!</h2>
            <p className="card-text" style={{ color: "#6a6a6a" }}>
              Please put your login credentials below to start using the chatbot
            </p>
            <Form />
            <p
              className="card-text mt-4 text-center"
              style={{ color: "#6a6a6a" }}
            >

              Don't have an account?
              <button type="button" className="btn btn-link">
                Sign up for free
              </button>
            </p>
          </div>
          <div
            className="m-5 d-flex justify-content-center"
            style={{ width: "10%", height: "7%" }}
          >
            <div
              className="m-5 d-flex justify-content-center"
              style={{ width: "10%", height: "7%" }}
            >
              <Button />
            </div>
          </div>
        </div>
        <div className="mt-1" style={{ borderRight: "0px" }}>
          <img
            src={pic}
            className="card-img img-fluid shadow-lg ml-4 rounded-left"
            style={{ borderRadius: "50px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

//image styling: style={{height:"95vh",width:"170vh"}}