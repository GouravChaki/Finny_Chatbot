// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
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
              <a class="nav-link active px-5" aria-current="page" href="#" >Home</a>
              <a class="nav-link px-5" href="#">Login</a>
              <a class="nav-link px-5" href="#">Sign Up</a>
              <a class="nav-link px-5" href="#">About Us</a>
              <a class="nav-link px-5" href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;