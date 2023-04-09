import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const MaybeshowNavbar =({children})=> {

   const location = useLocation();
   const [showNavbar,setshowNavbar]=useState(false)
   useEffect(() => {
       console.log('this is location:',location)
       if (location.pathname == '/Login'){
        setshowNavbar(false)
       }else{
        setshowNavbar(true)
       }
    },[location])

 
}

export default MaybeshowNavbar;