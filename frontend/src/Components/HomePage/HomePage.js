import React from 'react'
import Carousel from '../Carousel/Slider'
import Midpage from '../Midpage/Mid'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function HomePage(){
    return(
    <div>
        <Navbar/>
        <Carousel/>
        <Midpage />
        <Footer/>
    </div>
       
    )
}