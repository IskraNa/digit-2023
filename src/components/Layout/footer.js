import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="bg-dark text-light py-5 text-center">
        <Container>
          <Row>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <h4>Заследете не</h4>
              <ul className="ul1 list-unstyled d-flex pt-3">
                <li>
                  <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="">
                    <i className="bi bi-facebook fs-3"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="">
                    <i className="bi bi-twitter fs-3"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="">
                    <i className="bi bi-instagram fs-3"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="">
                    <i className="bi bi-linkedin fs-3"></i>
                  </Link>
                </li>
              </ul>
            </Col>
  
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <h4>Контакт и Политика</h4>
              <ul className="list-unstyled pt-3">
                <li>
                  <Link to="/contact" className="fs-4 mb-2 text-decoration-none footer-link">Контакт</Link>
                </li>
                <li>
                  <Link to="/policy" className="fs-4 mb-2 text-decoration-none footer-link">Политика</Link>
                </li>
              </ul>
            </Col>
  
            <Col xs={12} md={4}>
              <h4 className="text-light">Посетете не</h4>
              <div className="embed-responsive embed-responsive-16by9 mt-4">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.762351017807!2d21.407852774975755!3d42.00537555743744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415a477295689%3A0x9cc7da2bb3dca134!2sNetaville!5e0!3m2!1sen!2smk!4v1702479695794!5m2!1sen!2smk"
                  className="embed-responsive-item"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
          <Col xs={12}>
            <p className="text-light">© Digit - 2023 Three Blind Mice. All rights reserved.</p>
          </Col>
        </Row>

        </Container>
      </footer>
    );
}
export default Footer;