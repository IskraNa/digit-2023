import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../../images/logo.png";

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        {/* Logo */}
        <Navbar.Brand className="w-50">
          <img
            src={logo}
            alt="logo"
            className="w-50 d-inline-block align-top img-fluid"
          />
        </Navbar.Brand>

        {/* Toggle Button for Responsive Design */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />

        {/* Navigation Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/"  className="fs-1 fw-bold" style={{ color: '#CC5C29', fontFamily: '' }}>ДОМА</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="fs-1 fw-bold" style={{ color: '#CC5C29' }}>МЕНИ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
}

export default Header;