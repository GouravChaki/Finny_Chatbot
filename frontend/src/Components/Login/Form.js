import React, {useState} from 'react'
import './Form.css'
import {useContext} from 'react'
import Context from '../Context_api/Context'
import Alert from './Alert'
    export default function InputForm(){
        const a = useContext(Context)
        const alert=(event)=>{
            event.preventDefault()
          const obj={
             email: document.getElementById("Email").value,
             password: document.getElementById("Pass").value
          }
          console.log(obj)
          a.Login(obj)
      }
return (
        <div style={{fontFamily:'Inter'}}>
        <form>
            <div className="mt-5">
                
                <input type="email" className="form-control" id="Email" name="Email" placeholder='Email'/>
            </div>
            <div className="mt-5 mb-5">
                
                <input type="password" className="form-control" id="Pass" name="Pass" placeholder='Password'/>
            </div>
            <div>
            <button className="btn btn-primary w-100 shadow" onClick={alert}>Login</button>
            </div>
            {a.alert.msg && <Alert/>}
        </form>
        </div>
    )
}