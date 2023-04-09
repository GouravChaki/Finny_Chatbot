import React, { useState } from 'react'
import './Details.css'
import Alert from './Alert'
export default function Details() {
  const [value,setValue]=useState()
  const alert=()=>{
    setValue(1)
  }
return (
<div style={{fontFamily:'Inter'}}> 
<form> 
<div className="row">
  <div className="col">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
  </div>
<div className='mail'>
  <input type="email" className="form-control"  placeholder="Email" />
  </div>
<div className='pass'>
  <input type="password" className="form-control"  placeholder="Password" />
</div>
</div>
<div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" id="signupbt" type="button" onClick={alert}>Sign Up</button>
</div>
{value && <Alert value={value} setValue={setValue}/>}
</form>

</div> 
    )
}