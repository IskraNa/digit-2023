import React from "react";
import logo from "../../images/logo.png";

const Header = (props) => {
 
    return (
        <div className="row">
        <nav className="navbar navbar-expand-lg bg-dark">
          <a className="navbar-brand col-4 ms-5" href="/">
            <img src={logo} alt="logo" className="w-50" />
          </a>
          <div className="collapse navbar-collapse" id="navList">
            <ul className="navbar-nav me-0 col-6 offset-6"> 
              <li className="fs-1 fw-bold nav-item">
                <a className="nav-link" href="/home" style={{ color: '#CC5C29' , fontFamily: ''}}>ДОМА</a>
              </li>
              <li className="fs-1 fw-bold nav-item">
                <a className="nav-link"href="/menu" style={{ color: '#CC5C29' }}>МЕНИ</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    ); 
}

export default Header;