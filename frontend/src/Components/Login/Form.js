import React, {useState} from 'react'
import './Form.css'
import {useContext} from 'react'
import Context from '../Context_api/Context'
import Alert from './Alert'
    export default function InputForm(){
    //   const [value,setValue]=useState()
    //   const alert=()=>{
    //     setValue(1)
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
            <button className="btn btn-primary w-100 shadow" type="submit" onClick={alert}>Login</button>
            </div>
            {/* {value && <Alert value={value} setValue={setValue}/>} */}
        </form>
        </div>
    )
}


{/* <label htmlFor="Email" className="form-label">Enter Email</label>
<label htmlFor="Pass" className="form-label">Enter Password</label> */}