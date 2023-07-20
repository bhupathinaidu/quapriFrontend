import React from "react";
import "./header.component.css";
import logo from "../../assets/quapri_logo.png";
import SearchBoxComponent from "../searchBox/searchbox.component";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand>
          <Link to="/" className="nav-link">
            <img className="logo" src={logo} />
          </Link>
        </Navbar.Brand>
        <div className="d-lg-none">
          <i className="fa fa-shopping-cart"></i>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="searchDesktop nav-item">
              <SearchBoxComponent placeholder="Search" />
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <span className="callUs link">
                <i className="fa fa-phone"></i>
                <span className="mob">
                  +91-1234567890
                  <br />
                  <span className="callUsText">call us to place an order</span>
                </span>
              </span>
            </li>
            <li>
              <span className="loginSignup nav-link">
                <i className="fa fa-user"></i> Login/Sign Up
              </span>
            </li>
            <li>
              <span className="cartDesktop nav-link">
                <i className="fa fa-shopping-cart"></i>
              </span>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
