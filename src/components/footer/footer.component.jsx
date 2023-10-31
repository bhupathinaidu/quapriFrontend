import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./footer.component.css";

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col>
          <strong>Delivery Dark Stores</strong>
          <div className="list-group">
            <Link to="#">Bangalore</Link>
            <Link to="#">Gurgoan</Link>
            <Link to="#">New Delhi</Link>
            <Link to="#">Chennai</Link>
            <Link to="#">Hyderabad</Link>
            <Link to="#">Pune</Link>
          </div>
        </Col>
        <Col>
          <strong>Our Company</strong>
          <div className="list-group">
            <Link to="#">About Us</Link>
            <Link to="#">Career</Link>
            <Link to="#">Blog</Link>
          </div>
        </Col>
        <Col>
          <strong>Quick Links</strong>
          <div className="list-group">
            <Link to="#">Help</Link>
            <Link to="#">Business Pricing</Link>
            <Link to="#">Find Stores</Link>
            <Link to="#">My Account</Link>
            <Link to="#">Track Order</Link>
          </div>
        </Col>
        <Col>
          <strong>Imortant Links</strong>
          <div className="list-group">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Delivery & Return Policy</Link>
            <Link to="#">Terms & Conditions</Link>
          </div>
        </Col>
        <Col>
          <div className="d-flex align-items-center">
            <i className="fa fa-phone"></i>
            <span className="ms-3">
              <Link to="tel:+917892232789">+91-789-2232-789</Link>
            </span>
          </div>
          <div className="d-flex align-items-center mt-2">
            <i className="fa fa-envelope"></i>
            <span className="ms-3">
              <Link to="mailto:info@quapri.com">info@quapri.com</Link>
            </span>
          </div>
          <div className="mt-3">
            <strong>Follow Us</strong>
            <div className="d-flex flex-row socialIcons">
              <div className="mt-2 me-2">
                <Link to="#">
                  <i className="fa fa-instagram"></i>
                </Link>
              </div>
              <div className="mt-2 me-2">
                <Link to="#">
                  <i className="fa fa-facebook-square"></i>
                </Link>
              </div>
              <div className="mt-2 me-2">
                <Link to="#">
                  <i className="fa fa-twitter-square"></i>
                </Link>
              </div>
              <div className="mt-2 me-2">
                <Link to="#">
                  <i className="fa fa-linkedin-square"></i>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="secondaryFooter">
        <Col>
          <p>
            <span>©</span>2023 Quapri Services Pvt. Ltd. All Rights Reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
