import React from "react";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="row">
    <nav className="navbar navbar-expand-lg bg-dark">
      <Link  className="navbar-brand col-4 ms-5" to="/">
        <img src={logo} alt="logo" className="w-50" />
      </Link>
      <div className="collapse navbar-collapse" id="navList">
        <ul className="navbar-nav me-0 col-6 offset-6"> 
          <li className="fs-1 fw-bold nav-item">
            <Link className="nav-link" to="/" style={{ color: '#CC5C29' , fontFamily: ''}}>ДОМА</Link>
          </li>
          <li className="fs-1 fw-bold nav-item">
            <Link className="nav-link" to="/menu" style={{ color: '#CC5C29' }}>МЕНИ</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
); 
}


export default Header;