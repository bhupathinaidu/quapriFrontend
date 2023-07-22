import React from "react";
import "./servicesNav.component.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ServiceNavbarComponent = () => {
  return (
    <nav className="serviceNavbarContainer">
      <div className="serviceNavbarWrapper">
        <div className="serviceList">
          <div className="nav-item dropdown">
            <li>
              <Link to="/same-day-delivery">
                <span
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false">
                  Same Day Delivery
                </span>
              </Link>
            </li>
            <div
              className="dropdown-menu wt-100 mt-2 py-0"
              aria-labelledby="dropdownMenuButton">
              <Container className="d-block megamenuContainer">
                <Row className="row-cols-4">
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Business Cards</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Premium Laminated Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Sandwich Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Standard Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Textured Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Spot UV Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Translucent Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Eco-Friendly Business Cards
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Business Cards</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Premium Laminated Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Sandwich Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Standard Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Textured Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Spot UV Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Translucent Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Eco-Friendly Business Cards
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Business Cards</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Premium Laminated Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Sandwich Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Standard Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Textured Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Spot UV Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Translucent Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Eco-Friendly Business Cards
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Business Cards</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Premium Laminated Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Sandwich Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Standard Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Textured Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Spot UV Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Translucent Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Eco-Friendly Business Cards
                        </div>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="nav-item dropdown">
            <li className="dropdown">
              <Link to="/stationery">
                <span
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false">
                  Stationery
                </span>
              </Link>
            </li>
            <div
              className="dropdown-menu wt-100 mt-2 py-0"
              aria-labelledby="dropdownMenuButton">
              <Container className="d-block megamenuContainer">
                <Row className="row-cols-4">
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Office Supplies</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Premium Laminated Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Sandwich Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Standard Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Textured Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Spot UV Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Translucent Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Eco-Friendly Business Cards
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Office Supplies</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Premium Laminated Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Sandwich Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Standard Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Textured Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Spot UV Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Translucent Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Eco-Friendly Business Cards
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Office Supplies</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Premium Laminated Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Sandwich Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Standard Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Textured Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Spot UV Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Translucent Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Eco-Friendly Business Cards
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Office Supplies</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Premium Laminated Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Sandwich Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Standard Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Textured Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Spot UV Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Translucent Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Eco-Friendly Business Cards
                        </div>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="nav-item">
            <Link to="/corporate-gifts">Corporate Gifts</Link>
          </div>
          <div className="nav-item">
            <Link to="/drinkware">Drinkware</Link>
          </div>
          <div className="nav-item">
            <Link to="/packaging">Packaging</Link>
          </div>
          <div className="nav-item">
            <Link to="/apparel">Apparel</Link>
          </div>
          <div className="nav-item">
            <Link to="/marketing">Signs & Marketing</Link>
          </div>
          <div className="nav-item">
            <Link to="/awards">Awards</Link>
          </div>
          <div className="nav-item">
            <Link to="/photo-gifts">Photo Gifts</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ServiceNavbarComponent;
