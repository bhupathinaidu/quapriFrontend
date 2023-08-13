import React from "react";
import "./servicesNav.component.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ServiceNavbarComponent = () => {
  return (
    <nav className="serviceNavbarContainer">
      <div className="serviceNavbarWrapper container">
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
          <div className="nav-item dropdown">
            <li className="dropdown">
              <Link to="/corporate-gifts">
                <span
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false">
                  Corporate Gifts
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
                          <span role="link">Joining Kits</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Keep Hustling
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Novelty
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Cool As Blue
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Brilliance
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Employee Welcome Kit</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Work Essentials Kit
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Eco Essentials Kit
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Induction Welcome Kit
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          In The Zone Kit
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Laptop Stickers</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Custom Shape Stickers
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Clear Stickers
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Circle Stickers
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Rectangle Stickers
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Others</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Backpacks
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Laptop Sleeves
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Button Badges
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Mousepads
                        </div>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="nav-item">
            <Link to="/drinkware">Drinkware</Link>
          </div>
          <div className="nav-item dropdown">
            <li className="dropdown">
              <Link to="/packaging">
                <span
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false">
                  Packaging
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
                          <span role="link">Stickers & Labels</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Product Packaging Labels
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Circle Labels
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Waterproof Labels
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Roll Labels
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Sheet Stickers
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Paper Bags</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Gift Paper Bags
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Retail Paper Bags
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Takeout Paper Bags
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Eco Paper Bags
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          White Paper Bags
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Courier Poly Bags</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Small Poly Bags
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Medium Poly Bags
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Large Poly Bags
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Custom Poly Bags
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Standard Shipping Bag
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Boxes</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Sleeved Mailer Boxes
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Flat Mailer Boxes
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Shipping Boxes
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Printed Mailer Boxes
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
              <Link to="/apparel">
                <span
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false">
                  Apparel
                </span>
              </Link>
            </li>
            <div
              className="dropdown-menu wt-100 mt-2 py-0"
              aria-labelledby="dropdownMenuButton">
              <Container className="d-block megamenuContainer">
                <Row className="row-cols-3">
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">T-Shirts</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Regular Cotton T-Shirt
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Polo T-Shirt
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Bulk Round Neck T-Shirts
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          V-Neck Half Sleeve T-Shirt
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          V-Neck Full sleeve T-Shirt
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Hoodies</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Personalized Hoodies
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Personalized Zipper Hoodies
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Embroidered Hoodies
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Eco Cotton Blend Hoodies
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Bulk Hoodies
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Caps</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Plain Caps
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Line Stitching Caps
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Piping Caps
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Tipping Caps
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
              <Link to="/marketing">
                <span
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false">
                  Signs & Marketing
                </span>
              </Link>
            </li>
            <div
              className="dropdown-menu wt-100 mt-2 py-0"
              aria-labelledby="dropdownMenuButton">
              <Container className="d-block megamenuContainer">
                <Row className="row-cols-3">
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Name Plates</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Embossed Name Plate
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Debossed Name Plate
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Square Name Plate
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Circle Name Plate
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Rectangle Name Plate
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Event Signage</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Standees
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Banners
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Promotional Flags
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Danglers
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="megamenu">
                      <h6 className="megamenuHeading">
                        <Link to="#">
                          <span role="link">Decals</span>
                        </Link>
                      </h6>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Frosted Decals
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Premium Decals
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Wall Decals
                        </div>
                      </Link>
                      <Link className="megaMenuLink" to="#">
                        <div role="link" className="my-1">
                          Window Decals
                        </div>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
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
