import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Lottie from "react-lottie"
import Anusuya from './anusuya.jpg'
import Diya from './diya.jpg'
import Gourav from './tokai.jpg'
import Gargee from './tuki.jpg'
import AboutFinny from "./AboutFinny"
function About() {
        const defaultOptions = {
          loop: true,
          autoplay: true, 
          animationData: AboutFinny,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        };
  return (
    <>
    <Navbar/>
    <div className="d-flex flex-row" style={{backgroundColor: 'black', height:'150vh', margin:"5%", marginTop:"10%"}}>
        <div className="w-25 h-50" style={{marginTop: '4%',color: "white"}}>
          <h1 className="mt-5" style={{fontSize:'3em', textAlign: 'center', marginLeft:"5%"}}>We Train<br/> <strong>We Learn </strong><br/> We Gain</h1>
          <p className="mt-5" style={{textAlign:"center"}}><strong>We are explorers in the field of technology, learning and broadening our horizons.</strong></p>
          </div>
        <div className="w-50 h-75 ml-5">
            <Lottie options={defaultOptions}/>
            </div>
            <div className="w-25 h-50" style={{marginTop:"4.5%"}}>
<div className="row">
            <div class="card col" style={{width: '18rem',backgroundColor:'black',color:'white'}}>
  <img class="card-img-top" src={Gourav} alt="Card image cap" style={{borderRadius:"50px"}}/>
  <div class="card-body">
    <h6 class="card-title">Gourav Chaki</h6>
    <a href="https://github.com/GouravChaki" class="btn btn-primary" style={{backgroundColor: 'black'}}>Github</a>
  </div>
</div>

<div class="card col" style={{width: '18rem',backgroundColor:'black',color:'white'}}>
  <img class="card-img-top" src={Gargee} alt="Card image cap" style={{borderRadius:"50px"}}/>
  <div class="card-body">
    <h6 class="card-title">Gargee Bhowmick</h6>
    <a href="https://github.com/Gargee-Bhowmick" class="btn btn-primary" style={{backgroundColor: 'black'}}>Github</a>
  </div>
</div>
</div>

<div className="row">
            <div class="card col" style={{width: '18rem',backgroundColor:'black',color:'white'}}>
  <img class="card-img-top" src={Anusuya} alt="Card image cap" style={{borderRadius:"50px"}}/>
  <div class="card-body">
    <h6 class="card-title">Anusuya Deb</h6>
    <a href="https://github.com/Anusuya-Deb" class="btn btn-primary" style={{backgroundColor: 'black'}}>Github</a>
  </div>
</div>

<div class="card col" style={{width: '18rem',backgroundColor:'black',color:'white'}}>
  <img class="card-img-top" src={Diya} alt="Card image cap" style={{borderRadius:"50px"}}/>
  <div class="card-body">
    <h6 class="card-title">Diya Das</h6>
    <a href="https://github.com/MDas08" class="btn btn-primary" style={{backgroundColor: 'black'}}>Github</a>
  </div>
</div>
</div>

            </div>
    </div>
    </>
  )
          }
export default About