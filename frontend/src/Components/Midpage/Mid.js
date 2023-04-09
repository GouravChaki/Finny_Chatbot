import React from 'react'
import pic from './Homepage__20058480_62400571.png'

export default function mid() {
   return (
       <>
      <div className='d-flex' style={{backgroundColor: 'black',height: '620px'}}>
      <div style={{marginTop: '9%', marginLeft: '7%', fontSize: '110%'}}>
       <h1 style={{marginTop: '-69px',fontSize: '380%',color: 'white' }}>
       ChatBOT
       </h1>
       <p style={{paddingTop: '20px',color: 'white'}}>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi 
          ut aliquip ex ea commodo consequat.Quis aute 
          iure reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint obcaecat cupiditat non proident,
          sunt in culpa qui officia deserunt mollit anim 
          id est laborum.
      </p>

     <button class="btn btn-primary" type="submit" style={{marginTop: '18%',paddingLeft: '50px',paddingRight: '50px'}}>Login</button>
     <button class="btn btn-primary" type="submit" style={{marginTop: '18%',paddingLeft: '50px',paddingRight: '50px',marginLeft: '20px'}}>SignUp</button>
  </div>
    <div>
        <div>
          <img src={pic} class="rounded float-end" style={{width: '83%',marginTop: '18vh', marginRight: '7%'}} />
        </div> 
        <div style={{marginTop: '490px', marginLeft: '125px'}}>
          <button class="btn btn-primary" type="submit" style={{paddingLeft: '120px',paddingRight: '120px',borderRadius: '20px'}}>Try ChatBOT</button>
        </div>
    </div>
       </div>
       
     
       
        
       </>
   )
 }