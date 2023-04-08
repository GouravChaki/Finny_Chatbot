import React from 'react'
import pic from './Homepage_robothandshakehumanbackgroundfuturisticdigitalage1.png'
import picc from './P.jfif'
import piccc from './R.jfif'
export default function Slider() {
return (
  <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner"  style={{marginTop: '-1px'}}>
    <div className="carousel-item active">
      <img src={pic} className="d-block w-100" style={{height: '686px'}}/>
    </div>
    <div className="carousel-item">
      <img src={picc} className="d-block w-100" style={{height: '686px'}} />
    </div>
    <div className="carousel-item">
      <img src={piccc} className="d-block w-100" style={{height: '686px'}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   )
 }