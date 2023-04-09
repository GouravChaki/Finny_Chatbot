import React from 'react'

import pic from './Homepage_robothandshakehumanbackgroundfuturisticdigitalage1.png'
import picc from './Finance 2.png'
import piccc from './Cute chatbot 2.png'
import Help from "./Help.json"
import Lottie from "react-lottie";
 function Slider() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true, 
  //   animationData: Help,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };
 

    return (
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
     <div class="carousel-inner"  style={{marginTop: '-1px'}}>
    <div class="carousel-item active">
      <img src={pic} class="d-block w-100" style={{height: '686px'}}/>
    </div>
    {/* <div className="login" style={{paddingLeft: '93px'}}>
       
       <Lottie options={defaultOptions}/>
     </div> */}
    <div class="carousel-item">
      <img src={picc} class="d-block w-100" style={{height: '686px'}} />
    </div>
    <div class="carousel-item">
      <img src={piccc} class="d-block w-100" style={{height: '686px'}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   )
 }
 export default Slider;