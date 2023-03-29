import React, { useState, useEffect, useContext } from 'react';
import MainContext from '../Context/MainContext';
export default function SignUp(props) {
  const a= useContext(MainContext)
  const click=()=>{
    const object=
      {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('mail').value,
        date: document.getElementById('dob').value,
        address: document.getElementById('address').value,
        contact: document.getElementById('phone').value,
        password: document.getElementById('password').value,
    }
    const cpass= document.getElementById('cpassword').value
    if(cpass===object.password)
    {
      a.setUser(object)
    }
    else{
      a.setAlert({
        msg: "Password entered doesn't match with confirm password",
        color: "danger"
      })
      setTimeout(()=>{
        a.setAlert({
          msg: null,
          color: null
        })},3000)
    }
  }
  useEffect(()=>{
    // console.log(a.user)
    a.register()
  },[a.user])
  return (
    <>
    {a.alert &&<div className={`alert alert-${a.alert.color}`} role="alert">{a.alert.msg}</div>}
    <div className="container h-50 w-50 p-4 shadow mb-4 bg-body-tertiary rounded">
    <h3 className="text-center mb-4"><b>REGISTRATION</b></h3>
    <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'#adb5bd'}}>Email</span>
  <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="xyz@gmail.com" id="mail"/>
   </div>
   <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>First Name</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="firstname"/>
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>Last Name</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="lastname"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'#adb5bd'}}>Date of Birth</span>
  <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="dob"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>Address</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="address"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'#adb5bd'}}>Contact No.</span>
  <input type="tel" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="eg:- +91 9999999999" id="phone"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>Password</span>
  <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="password"/>
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>Confirm Password</span>
  <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="cpassword"/>
</div>
<div className="text-center mt-5">
<button type="submit" className="btn btn-dark mx-5" onClick={click}>Submit</button>
</div>
</div>
</>
);
}