import React from 'react'
import './Form.css'

export default function InputForm() {


    return (
        <div style={{fontFamily:'Inter'}}>
        <form>
            <div className="mt-5">
                
                <input type="email" className="form-control" id="Email" placeholder='Email'/>
            </div>
            <div className="mt-5 mb-5">
                
                <input type="password" className="form-control" id="Pass" placeholder='Password'/>
            </div>
            <button className="btn btn-primary w-100 shadow" type="submit">Login</button>
        </form>
        </div>
    )
}

{/* <label htmlFor="Email" className="form-label">Enter Email</label>
<label htmlFor="Pass" className="form-label">Enter Password</label> */}