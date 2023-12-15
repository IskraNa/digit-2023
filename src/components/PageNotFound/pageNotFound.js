import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { useSpring, animated } from 'react-spring';
import '../App/App.css';

function PageNotFound() {
  const digit1Animation = useSpring({
    loop: { reverse: true },
    from: { translateY: 0 },
    to: { translateY: 20 }, 
    config: { duration: 300 }
  });

  const digit2Animation = useSpring({
    loop: { reverse: true },
    from: { translateY: 0 },
    to: { translateY: 20 }, 
    config: { duration: 300 }
  });

  const digit3Animation = useSpring({
    loop: { reverse: true },
    from: { translateY: 0 },
    to: { translateY: 20 }, 
    config: { duration: 300 }
  });

  return (
    <Container fluid className="m-0 p-0 bg-dark d-flex flex-column align-items-center justify-content-center">
      <Row className="mb-5">
        <Col className="pageNotFound text-center mt-3 p-4 shadow-lg bg-light rounded">
          <div className="text-center d-inline-flex">
            <animated.div style={digit1Animation}>
              <div className="not-found font-weight-bold">4</div>
            </animated.div>
            <animated.div style={digit2Animation}>
              <div className="not-found font-weight-bold">0</div>
            </animated.div>
            <animated.div style={digit3Animation}>
              <div className="not-found font-weight-bold">4</div>
            </animated.div>
          </div>
          <div className="fs-1 text-center">Page Not Found</div>
        </Col>
      </Row>
      <Row className="">
        <Col className="fs-2 text-white text-center">
          Еј другар, не го скрши Интернетот, но тоа што го бараш не постои.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="Food Placeholder"
                className="img-fluid rounded"
                height={400}
                width={500}
              />
            </Link>
          </div>
          <Link
            to="/"
            className="fs-3 btn btn-lg btn-dark text-white fw-bold mt-3"
          >
            врати се на првичната страна.
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default PageNotFound;
