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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/"  className="fs-1 fw-bold nav-link-custom">ДОМА</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="fs-1 fw-bold nav-link-custom">МЕНИ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
}

export default Header;