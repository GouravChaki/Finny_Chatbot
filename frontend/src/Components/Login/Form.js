import React, {useState} from 'react'
import './Form.css'
import Alert from './Alert'
    export default function InputForm() {
      const [value,setValue]=useState()
      const alert=()=>{
        setValue(1)
      }

    return (
        <div style={{fontFamily:'Inter'}}>
        <form>
            <div className="mt-5">
                
                <input type="email" className="form-control" id="Email" placeholder='Email'/>
            </div>
            <div className="mt-5 mb-5">
                
                <input type="password" className="form-control" id="Pass" placeholder='Password'/>
            </div>
            <div>
            <button className="btn btn-primary w-100 shadow" type="submit" onClick={alert}>Login</button>
            </div>
       {value && <Alert value={value} setValue={setValue}/>}
        </form>
        </div>
    )
}
