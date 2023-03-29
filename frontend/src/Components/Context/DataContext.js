import React, { useState } from "react";
import MainContext from "./MainContext.js";
import axios from 'axios';
import RenderCard from '../Market/RenderCard.js';

export default function DataContext(props) {
  const [Data, setData] = useState([{
    key: 1,
    title: "cloth1",
    buy: 1300,
    rent: 1245,
  },
  {
    key: 2,
    title: "cloth2",
    buy: 1300,
    rent: 1245,
  },
  {
    key: 3,
    title: "cloth3",
    buy: 1300,
    rent: 1245,
  },
  {
    key: 4,
    title: "cloth4",
    buy: 1300,
    rent: 1245,
  },
  {
    key: 5,
    title: "cloth5",
    buy: 1300,
    rent: 1245,
  },
  {
    key: 6,
    title: "cloth6",
    buy: 1300,
    rent: 1245,
  },
  {
    key: 7,
    title: "cloth7",
    buy: 1300,
    rent: 1245,
  },
  {
    key: 8,
    title: "cloth8",
    buy: 1300,
    rent: 1245,
  },
]);

  //alert state

  const [alert,setAlert]=useState({
    msg: null,
    color: null
  })

  //state for user

  const[user,setUser] = useState({})

  //posting for user data input

  const register= async ()=>{
    try{
      const res=await axios.post('http://localhost:8000/createuser',user)
    console.log(res.data)
    await setAlert({
      msg: "You have successfully signed in",
      color: "success"
    })
  }
  catch(error)
  {
    if(error.response.status===404) //when errors present w.r.t format issues
    {
    console.log(error.response.data)
    setAlert({
      msg: 
      error.response.data.error.map((item)=>{
        return  item.param + ": "+ item.msg + " , "
      }),
      // error.response.data.error[0].msg,
      color: "danger"
    })
  }
  else{ //error when same mail id is matched and exists
    console.log(error.response.data)
    setAlert({
      msg: "User with same credentials exist",
      // error.response.data.error[0].msg,
      color: "danger"
    })
  }

  //set timeout is used to vanish our alert after 3 s automatically

    setTimeout(()=>{
      setAlert({
        msg: null,
        color: null
      })},3000)
  }
}

// fetch data f
  const allData= async ()=>{
  try{
    const res = await axios.get("http://localhost:8000/find")
    console.log(res.data)
  }
  catch(error)
  {
    console.log(error.response.data)
  }      
  }

  //login page fetching

  const login= async ()=>{
  try{

    const res= await axios.post("http://localhost:8000/login",user)
    
    //alert of successful log in
    
    setAlert({
      msg: "You have successfully logged in",
      color: "success"
    })

  }
  catch(error)
  {
    console.log(error.response.data)

    setAlert({
      msg: error.response.data,
      color: "danger"
    })

  }
    
  //set timeout is used to vanish our alert after 3 s automatically

    setTimeout(()=>{
      setAlert({
        msg: null,
        color: null
      })},3000)
  }
  
  //fetching data from online api

  const market = async()=>{
    
    try{
    const options = {
      method: 'GET',
  url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail',
  params: {lang: 'en', country: 'us', productcode: '0839915011'},
  headers: {
    'X-RapidAPI-Key': '5aa3950784msh7fc4eed8da83370p16934fjsnbff919e048dc',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
    }
      const res =await axios.request(options)
      console.log(res)
      // const send= await axios.post("http://localhost:8000/post",res.data.results.map(
      //   (items)=>{
      //     return items 
      //   }
      // ))
      // res.data.results.map(
      //   (items)=>{
      //     return <RenderCard key={items.code} item={items}/> 
      //   })
    }
    catch(error){
      console.log(error)
    }
}

   return (
    <MainContext.Provider value={{Data,setData,user,setUser,register,allData,login,alert,setAlert,market}}>
    {props.children}
    </MainContext.Provider>  
    );
}


{/* <a href="">Hello!</a> */}
