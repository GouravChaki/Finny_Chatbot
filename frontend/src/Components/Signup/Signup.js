import React from 'react'
import Details from './Details.js'
import Button from './Button_arrow'
import SignUpFinny from "./SignUpFinny.json"
import Lottie from "react-lottie";
 function Signup() { 
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: SignUpFinny,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className='card' style={{backgroundColor: 'black'}}>
    <div className="d-flex mt-5" style={{backgroundColor: 'black',marginLeft:'8%'}}>
    <div className="container card border-primary w-70 mt-1 mb-5 ms-3" style={{backgroundColor: 'black',width:'60%'}}>
      <div className="col-md" style={{marginTop: '-61px'}}>
          <div className="card-body mx-5 mt-5" style={{ fontFamily: "Inter" ,height: '280px',paddingTop: '1%'}}>
            <h2 className="card-title mt-5" style={{color: 'white',paddingTop: '1px'}}>Create your account</h2>
            <p className="card-text" style={{ color: "white" }}>
            You're one step away from joining our 
            ChatBOT family!
            </p>
           <Details />
            <p
              className="card-text text-center"
              style={{ color: "white" }}
            >
              Already a member?
              <button type="button" className="btn btn-link">
                login
              </button>
            </p>
          </div>
          <div
            className="m-5 d-flex justify-content-center"
            style={{ width: "10%", height: "7%"}}
          >
            <Button/>
          </div>
        </div>
      </div>
      {/* <div className="mt-1" style={{borderRadius:"70px"}}>
        <img
          src={pic}
          className="card-img img-fluid shadow-lg ml-4 rounded-left"
          style={{ marginTop: '-17px',borderRadius: "56px",height: '650px',width: '1300px' }}
        />
      </div> */}
      <div className="signup" style={{width:'60%'}}>
       
       <Lottie options={defaultOptions}/>
     </div>
    </div>
    </div>
  );
}

export default Signup;