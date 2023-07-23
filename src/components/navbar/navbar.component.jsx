import React from "react";
import "./navbar.component.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="desktop-navbar-menu">
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Customer Support
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <span className="nav-link"> Store Locator</span>
            </li>
            <li>
              <span className="nav-link">Sample Kit</span>
            </li>
            <li>
              <span className="nav-link businessLink">Business Quote</span>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
