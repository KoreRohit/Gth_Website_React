import React from 'react';
import Techlogo from "../img/TechhubLogo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <div className="col-2">
          <img src={Techlogo} class="img-fluid" width="99%" height="60px" alt="" />
        </div>

        <div className="col-8">
          <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Services" className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">Placements</a> */}
                  <Link to="/Placements" className="nav-link">Placements</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Payments</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Courses
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Full-Stack Java-Developer</a></li>
                    <li><a className="dropdown-item" href="#">Full-Stack Php-Developer</a></li>
                    <li><a className="dropdown-item" href="#">Full-Stack Python-Developer</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">My-Sql</a></li>
                    <li><a className="dropdown-item" href="#">AWS</a></li>
                    <li><a className="dropdown-item" href="#">Data-Science</a></li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li> */}
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <Link to="/StudentLogin" className="nav-link btn btn-outline-primary my-2 my-sm-0" style={{color:"black"}}>Student Login</Link>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
