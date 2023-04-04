import React from 'react'
import './Details.css'
export default function Details() {
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
<div >
  <input type="email" className="form-control"  placeholder="Email" />
  </div>
<div>
  <input type="password" className="form-control"  placeholder="Password" />
</div>
</div>
<div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" id="signupbt" type="button">Sign Up</button>
</div>
</form>
</div> 
    )
}