import React from 'react'
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary shadow">
  <div className="container">
    <h2>TRENDY</h2>
      <ul className="nav justify-content-center">
        <li><Link className="nav-link active" aria-current="page" to="/"><h5>Home</h5></Link></li>
        <li><Link className="nav-link" to="/market"><h5>Market</h5></Link></li>
        <li><Link className="nav-link" to="/rent"><h5>Rent</h5></Link></li>
        </ul>
        <div className="d-flex">
          <div className='mx-1'>
        <Link className="nav-link active" to="/signup">
        <button className="btn btn-outline-success my-2" type="submit">SignUp</button>
        </Link> 
        </div>
        <div>
        <Link className="nav-link active" to="/login">
        <button className="btn btn-outline-success my-2" type="submit">Login</button>
        </Link>
        <Link className="nav-link active" to="/profile">
        <button className="btn btn-outline-success my-2" type="submit">Profile</button>
        </Link>
        </div>
        </div>
      </div>
</nav>
  )
}
