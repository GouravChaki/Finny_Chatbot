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
     setToken(res.data)
     Search_History(res.data)
    }
    catch(error){
      console.log(error)
    }
  }
  const Login = async (req) =>{
    try{
     const res = await axios.post("http://localhost:8000/auth/login",req)
     setToken(res.data)
     Search_History(res.data)
    }
    catch(error){
      console.log(error)
    }
  }

  const Search_History = async (receive_token) =>{
    try{
      // const execute= async ()=>{
    const url = "http://localhost:8000/history/feature1";
    const res = await fetch(url, {method: 'GET', headers: {
      'Authorization': receive_token
    }})
  //   return res
  // }
    //  execute().then((res)=>{console.log(res.json())})
    //  setMess(res)
    console.log(res.body.getReader())
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
