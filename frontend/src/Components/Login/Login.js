import React from "react";
import { Link } from 'react-router-dom'
import pic from "./LoginPage.png";
import InputForm from "./Form.js";
export default function Login() {
  return (
    //<div className='container'>
    <div className="d-flex flex-column flex-md-row">
      <div className="container card border-primary w-70 mt-1 mb-5 ms-3">
        <div className="col-md" style={{marginTop: '-41px'}}>
          <div className="card-body mx-5 mt-5" style={{ fontFamily: "Inter" ,height: '350px',paddingTop: '1%',paddingBottom: '120px'}}>
            <h2 className="card-title mt-5">Hi, Welcome Back!</h2>
            <p className="card-text" style={{ color: "#6a6a6a" }}>
              Please put your login credentials below to start using the chatbot
            </p>
            <InputForm />
            <p
              className="card-text mt- text-center"
              style={{ color: "#6a6a6a" }}
            >
              Don't have an account?
              <button type="button" className="btn btn-link">
                Sign up for free
              </button>
            </p>
          </div>
          <div
            className="m-5 d-flex justify-content-center "
            style={{ width: "1%", height: "7%",paddingLeft: '1px',paddingTop: '10px' }}
          >
             <Link to="/"
              className="btn btn-primary shadow-lg mb-1 w-100 h-100"
              style={{ borderRadius: "50px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "-12px" ,marginTop: "-11px"}}
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
      </div>
      <div className="mt-2" style={{borderRight:"0px"}}>
        <img
          src={pic}
          className="card-img img-fluid shadow-lg ml-4 rounded-left"
          style={{ marginTop: '13px',borderRadius: "56px",height: '650px',width: '1300px' }}
        />
      </div>
    </div>
    //</div>
  );
}

//image styling: style={{height:"95vh",width:"170vh"}}
