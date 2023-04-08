import React, { useState } from 'react'
import './Details.css'
import Alert from './Alert'
export default function Details() {
  const [value,setValue]=useState()
  const alert=(event)=>{
    event.preventDefault()
    setValue(1)
  }
return (
<div style={{fontFamily:'Inter'}}> 
<form action="http://localhost:8000/auth/createuser" method="post"> 
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