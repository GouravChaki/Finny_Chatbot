import React from 'react'
export default function InputForm() {


    return (
        <form>
            <div className="mb-3">
                <label htmlFor="Email" className="form-label">Enter Email</label>
                <input type="email" className="form-control" id="Email" placeholder='Email'/>
            </div>
            <div className="mb-3">
                <label htmlFor="Pass" className="form-label">Enter Password</label>
                <input type="password" className="form-control" id="Pass" placeholder='Password'/>
            </div>
            <button className="btn btn-primary" type="submit">Login</button>
        </form>
    )
}