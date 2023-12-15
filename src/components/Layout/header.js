import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../../images/logo.png";

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="w-50">
          <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-50 d-inline-block align-top img-fluid"
          />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/"  className="fs-1 fw-bold nav-link-custom">ДОМА</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="fs-1 fw-bold nav-link-custom">МЕНИ</Nav.Link>
            <Nav.Link as={Link} to="/" className="ms-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="42" fill="black" className="bi bi-cart4 cart nav-link-custom rounded rounded-5" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
}

export default Header;