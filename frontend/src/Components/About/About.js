import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Lottie from "react-lottie"
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
    <div className="d-flex flex-row" style={{backgroundColor: 'black', height:'150vh', margin:"5%"}}>
        <div className="w-25 h-50" style={{marginTop: '10%'}}><h1 className="mt-5" style={{fontSize:'3.5em',color: "white" , textAlign: 'center', marginLeft:"5%"}}>We Train<br/> We Learn <br/> We Gain</h1></div>
        <div className="w-50 h-75 ml-5">
            <Lottie options={defaultOptions}/>
            </div>
            <div className="w-25 h-50" style={{marginTop: '10%'}}>
<div className="row">
            <div class="card col" style={{width: '18rem',backgroundColor:'black',color:'white'}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Gourav Chaki</h5>
    <a href="#" class="btn btn-primary">Github</a>
  </div>
</div>

<div class="card col" style={{width: '18rem',backgroundColor:'black',color:'white'}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Gargee Bhowmick</h5>
    <a href="#" class="btn btn-primary">Github</a>
  </div>
</div>
</div>

<div className="row">
            <div class="card col" style={{width: '18rem',backgroundColor:'black',color:'white'}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Anusuya Deb</h5>
    <a href="#" class="btn btn-primary">Github</a>
  </div>
</div>

<div class="card col" style={{width: '18rem',backgroundColor:'black',color:'white'}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Diya Das</h5>
    <a href="#" class="btn btn-primary">Github</a>
  </div>
</div>
</div>

            </div>
    </div>
    <Footer/>
    </>
  )
          }
export default About