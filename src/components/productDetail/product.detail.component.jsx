import React, { useEffect, useState } from "react";
import mainImg from "../../assets/test_plp_product.jpeg";
import { Link } from "react-router-dom";
import "./product.detail.component.css";
import {
  productDetail,
  fetchProductById,
} from "../../store/product/product.reducer";
import { useDispatch, useSelector } from "react-redux";
import { Tldraw, TldrawEditor } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import DesignTool from "../canvas/canvas.component";
import Form from "react-bootstrap/Form";
import iconImg from "../../assets/favico.png";

const ProductDetailComponent = ({ route, subRoute }) => {
  const dispatch = useDispatch();
  const productData = useSelector(productDetail);
  const { productDetails, isLoading, isError } = productData;
  const [showBoard, setShowBoard] = useState(false);

  useEffect(() => {
    dispatch(fetchProductById("QPVPPC"));
  }, []);

  // const persistenceId = "tldraw-example";

  // const handleMount = (app) => {
  //   // You can use the app API here! e.g. app.selectAll()
  //   app.selectAll();
  // };

  return (
    <div
      style={{
        opacity: isLoading ? "0.5" : "1",
        position: "relative",
        minHeight: "650px",
      }}>
      {isLoading ? (
        <h1 style={{ height: "500px", textAlign: "center" }}>...Loading</h1>
      ) : (
        <>
          <div className="container mt-2">
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
          </div>
          <div className="container productDetailWrapper">
            <div className="col-12 col-md-6 p-0 pb-3 px-md-3 productPictureAndCarausel">
              <img className="productMainPicture" src={mainImg} alt="mainImg" />
            </div>
            <div className="col-12 col-md-6 productDetails">
              <h1 className="pb-3">{productDetails?.data?.name}</h1>
              <p style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.6)" }}>
                {productDetails?.data?.description}
              </p>
              <Form>
                <div className="labelGroup d-flex align-items-center">
                  <h4>Shape</h4>
                  {["radio"].map((type) => (
                    <div key={`shape`} className="d-flex align-items-center">
                      <Form.Check
                        type={type}
                        id={`square`}
                        label={`Square`}
                        name="shape"
                        inline
                      />
                      <Form.Check
                        type={type}
                        id={`standard`}
                        label={`Standard`}
                        name="shape"
                        inline
                      />
                    </div>
                  ))}
                </div>
                <div className="labelGroup d-flex align-items-center">
                  <h4>Corner</h4>
                  {["radio"].map((type) => (
                    <div key={`corner`} className="d-flex align-items-center">
                      <Form.Check
                        type={type}
                        id={`standard`}
                        label={`Standard`}
                        name="corner"
                        inline
                      />
                      <Form.Check
                        type={type}
                        id={`round`}
                        label={`Round`}
                        name="corner"
                        inline
                      />
                    </div>
                  ))}
                </div>
                <div className="labelGroup d-flex align-items-center">
                  <h4>Quantity</h4>
                  <Form.Select>
                    {typeof productDetails?.data?.price === "object" &&
                      Object.keys(productDetails.data.price)
                        .filter((item) => item !== "_id")
                        .map((item) => {
                          return (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          );
                        })}
                  </Form.Select>
                </div>
                <div className="labelGroup d-flex align-items-center">
                  <h4>Material</h4>
                  <label>100% Paper</label>
                </div>
              </Form>
              <button
                onClick={() => setShowBoard(true)}
                className="btn btn-primary">
                Create the Design
              </button>
              {showBoard && (
                <div style={{ height: "300px", width: "600px" }}>
                  <div
                    style={{
                      position: "fixed",
                      top: "0px",
                      left: "0px",
                      width: "100vw",
                      height: "100vh",
                      background: "lightGrey",
                      zIndex: "999",
                    }}>
                    {
                      //<Tldraw id={persistenceId} onMount={handleMount} />
                    }
                    <div
                      className="closeButton"
                      onClick={() => setShowBoard(false)}>
                      <i className="fa fa-arrow-left" />
                      <img src={iconImg} alt="closeModal" />
                    </div>
                    <DesignTool />
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailComponent;
