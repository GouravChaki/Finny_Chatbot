import React, { useState, useContext } from 'react'
import Alert from './Alert'
import Context from '../Context_api/Context'
import '../Signup/Details.css'
export default function Details() {
  const a = useContext(Context)
  const alert=(event)=>{
      event.preventDefault()
      const obj={
         firstname: document.getElementById("firstname").value,
         lastname: document.getElementById("lastname").value,
         email: document.getElementById("email").value,
         password: document.getElementById("password").value
      }
      console.log(obj)
      a.Signup(obj)
  }
return (
<div style={{fontFamily:'Inter'}}> 
<form autocomplete="off"> 
<div className="row mt-4">
  <div className="col">
    <input type="text" className="form-control" name="firstname" id="firstname" placeholder="First name" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Last name" aria-label="Last name" />
  </div>
<div >
  <input type="email" className="form-control mt-4" name="mail" id="email" placeholder="Email" />
  </div>
<div>
  <input type="password" className="form-control mt-4" name="pass" id="password" placeholder="Password" />
</div>
</div>
<div className="d-grid gap-2 col-6 mx-auto mt-4">
  <button className="btn btn-primary" id="signupbt" type="button" onClick={alert} >Sign Up</button>
</div>
{a.alert.msg && <Alert/>}
</form>

</div> 
    )
}