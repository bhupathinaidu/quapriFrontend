import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mainImg from "../../assets/test_plp_product.jpeg";
import { Link } from "react-router-dom";
import "./product.detail.component.css";

const ProductDetailComponent = ({ route, subRoute }) => {
  return (
    <div>
      <Container className="mt-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/same-day-delivery">{route}</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="same-day-business-cards">{subRoute}</Link>
            </li>
          </ol>
        </nav>
      </Container>
      <Container className="productDetailWrapper">
        <Row>
          <Col md={6} className="p-0 pb-3 px-md-3">
            <div className="productPictureAndCarausel">
              <img className="productMainPicture" src={mainImg} alt="mainImg" />
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h1>Standard Business Card</h1>
              <div style={{ marginTop: "8px" }}>
                <ul>
                  <li>
                    <span
                      style={{
                        fontSize: "16px;",
                        color: "rgba(0, 0, 0, 0.6);",
                      }}>
                      People looking for a simple and affordable business card
                      have the option of a standard material business card.
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: "16px;",
                        color: "rgba(0, 0, 0, 0.6);",
                      }}>
                      Standard Material business cards measure3.5 x 2 inches
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        fontSize: "16px;",
                        color: "rgba(0, 0, 0, 0.6);",
                      }}>
                      Available in glossy and matte laminations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailComponent;
