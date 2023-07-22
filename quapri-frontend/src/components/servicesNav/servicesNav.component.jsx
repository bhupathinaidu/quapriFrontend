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
                          <span role="link">Business Essentials</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Acrylic Desk Stands
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Business Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Letterheads
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Flyers
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Document Printing
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Brochures
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Calendars & Diaries</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Wiro Diaries
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Desk Calendars
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Wall Calendar
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Poster Calendar
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Bookmark Calendars
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Calendar Cards
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Gifts</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Photo Frames
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Photo Prints
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Photo Mugs
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Certificates
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Cards</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Thank you Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Post Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Invitations
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Greeting Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Bookmarks
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
                          <span role="link">Office Supplies</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Letterheads
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Envelopes
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Rubber Stamps
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Bill Books
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Presentation Folders
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Cards</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Post Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Thank You Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Greeting Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Save the Date Cards
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Vouchers
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Notebooks</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Wiro Notebook
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Staple Notebook
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Perfect Bind Notebook
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Hard Case Notebook
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
