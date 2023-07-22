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
              <span
                className="dropdown-toggle"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false">
                Same Day Delivery
              </span>
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
              <span
                className="dropdown-toggle"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false">
                Stationery
              </span>
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
          <div className="nav-item">Corporate Gifts</div>
          <div className="nav-item">Drinkware</div>
          <div className="nav-item">Packaging</div>
          <div className="nav-item">Apparel</div>
          <div className="nav-item">Signs & Marketing</div>
          <div className="nav-item">Awards</div>
          <div className="nav-item">Photo Gifts</div>
        </div>
      </div>
    </nav>
  );
};

export default ServiceNavbarComponent;
