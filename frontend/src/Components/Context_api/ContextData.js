import React, { useState } from 'react';
import axios from 'axios'
import Context from './Context.js';
export default function ContextData(props) {
  const[mess,setMess]=useState('')
  const[v_sign,setSign]=useState(null)
  const[v_log,setLog]=useState(null)
  const[token,setToken]=useState("")
  const[f1,setF1]=useState(null)
  const[f2,setF2]=useState(null)
  const[f3,setF3]=useState(null)
  const[f4,setF4]=useState(null)
  const Signup = async (req) =>{
    try{
     const res = await axios("http://localhost:8000/auth/createuser",req)
     setToken(res) // Gives the JSON web token
     console.log(token)
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <Context.Provider value={{mess,setMess,v_sign,setSign,f1,setF1,f2,setF2,f3,setF3,f4,setF4,v_log,setLog,Signup,token}}>
        {props.children}
    </Context.Provider>
  )
}
