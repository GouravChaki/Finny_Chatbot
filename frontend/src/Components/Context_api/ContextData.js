import React, { useState } from 'react';
import axios from 'axios'
import Context from './Context.js';
export default function ContextData(props) {

  const [v_sign,setSign]=useState(null)
  const [v_log,setLog]=useState("")
  const [f1,setF1]=useState(null)
  const [f2,setF2]=useState(null)
  const [f3,setF3]=useState(null)
  const [f4,setF4]=useState(null)

  const [navbar, setNavbar] = useState(false);
  
  const [mess,setMess]=useState()

  const [token,setToken]=useState()
  const Signup = async (req) =>{
    try{
     const res = await axios.post("http://localhost:8000/auth/createuser",req)
     console.log(res)
     await setToken(res.data) // Gives the JSON web token
     console.log(token)
     Search_History(token)
    }
    catch(error){
      console.log(error)
    }
  }
  const Login = async (req) =>{
    try{
     const res = await axios.post("http://localhost:8000/auth/login",req)
     console.log(res.data)
     setToken(res.data) // Gives the JSON web token
     console.log(token)
     Search_History(token)
    }
    catch(error){
      console.log(error)
    }
  }

  const Search_History = async (req) =>{
    try{
     const res = await axios.post("http://localhost:8000/auth/getuser",req)
     console.log(res)
     setMess(res)
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <Context.Provider value={{navbar,setNavbar,mess,setMess,Login,v_sign,setSign,f1,setF1,f2,setF2,f3,setF3,f4,setF4,v_log,setLog,Signup,token}}>
        {props.children}
    </Context.Provider>
  )
}
