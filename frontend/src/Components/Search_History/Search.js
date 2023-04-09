import React from 'react'
import {useContext} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Context from "../Context_api/Context"

export default function Search() {
    const a = useContext(Context)
  return (
    <>
    {/* <Navbar/> */}
    <div>
        {
            a.token && <div>{a.token}</div>
        }
    </div>
    {/* <Footer/> */}
    </>
  )
}
