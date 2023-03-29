import React, { useState, useEffect, useContext } from 'react';
import MainContext from '../Context/MainContext'
export default function Login() {
  const a = useContext(MainContext)
  const change=()=>{
    const obj = {
      email: document.getElementById('ck_mail').value,
      password: document.getElementById('ck_password').value
    }
    console.log(obj)
    a.setUser(obj)
  }
  useEffect(()=>{
        a.login();
   },[a.user])
  return (
    <>
    {a.alert &&<div className={`alert alert-${a.alert.color}`} role="alert">{a.alert.msg}</div>}
    <div className="container h-50 w-50 p-4 shadow mb-4 bg-body-tertiary rounded mt-5">
    <h3 className="text-center mb-4"><b>LOGIN</b></h3>
    <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'#adb5bd'}}>Email</span>
  <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="xyz@gmail.com" id="ck_mail"/>
   </div>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default" style={{backgroundColor:'rgb(211 195 23)'}}>Password</span>
  <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="ck_password"/>
</div>
<div className="text-center mt-5">
<button type="submit" className="btn btn-dark mx-5" onClick={change}>Login</button>
</div>
  </div>
  </>
  )
}
