import React from 'react'
import {useContext} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Context from "../Context_api/Context"
import { useState, useEffect } from 'react';
export default function Search() {
  
    const a = useContext(Context)
  //   useEffect(() => {
  //     a.setNavbar(true)
  //  },[])
  return (
    <>
    {/* <Navbar/> */}
    <div style={{marginTop:'20vh'}}>
        {
            a.f1 && <div>{a.f1}</div>
        }
    </div>
    {/* <Footer/> */}
    </>
  )
}
