import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg sticky-top navbar-primary bg-*">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Finny</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"/>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav ms-auto">
              <Link class="nav-link active px-5" aria-current="page" to="/" >Home</Link>
              <Link class="nav-link px-5" to="/login">Login</Link>
              <Link class="nav-link px-5" to="/signup">Sign Up</Link>
              <a class="nav-link px-5" href="#">About Us</a>
              <a class="nav-link px-5" href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;