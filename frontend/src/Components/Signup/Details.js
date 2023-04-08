import React, { useState , useContext ,useEffect } from 'react'
import Context from "../Context_api/Context"
import './Details.css'
import Alert from './Alert'
export default function Details() {
  // const[value,setValue] = useState('0')
  const a = useContext(Context)
  const alert=(event)=>{
    event.preventDefault()
    // setValue(1)
    const obj={
       firstname: document.getElementById("firstname").value,
       lastname: document.getElementById("lastname").value,
       email: document.getElementById("email").value,
       password: document.getElementById("password").value
    }
    a.Signup(obj)
  }
return (
<div style={{fontFamily:'Inter'}}> 
<form> 
<div className="row">
  <div className="col">
    <input type="text" className="form-control" name="firstname" id="firstname" placeholder="First name" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" name="lastname" placeholder="Last name" aria-label="Last name" />
  </div>
<div >
  <input type="email" className="form-control" name="email" placeholder="Email" />
  </div>
<div>
  <input type="password" className="form-control" name="password" placeholder="Password" />
</div>
</div>
<div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" id="signupbt" type="button" onClick={alert} >Sign Up</button>
</div>
{value && <Alert value={value} setValue={setValue}/>}
</form>

</div> 
  )
}