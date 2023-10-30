import React, { useEffect, useState } from "react";
import mainImg from "../../assets/test_plp_product.jpeg";
import { Link, useSearchParams } from "react-router-dom";
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
import { setConfirm } from "../../store/confirm/confirm.reducer";
import { origin } from "../../api/origin";

const ProductDetailComponent = ({ route, routePath }) => {
  const dispatch = useDispatch();
  const productData = useSelector(productDetail);
  const { productDetails, isLoading, isError } = productData;
  const [showBoard, setShowBoard] = useState("none");
  const [shapeSelected, setShapeSelected] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");
  

  const saveAndProceed = (imgUrl) => {
    const price = productDetails?.data ? Object.values(productDetails?.data?.price)[Object.keys(productDetails?.data?.price).indexOf(selectedQuantity)]: 0;
    dispatch(setConfirm({
      name: productDetails?.data?.name,
      shape: shapeSelected,
      materials: productDetails?.data?.material,
      quantity: selectedQuantity,
      cost: price,
      imgUrl: imgUrl
    }))
  }

 useEffect(() => {
    const productId = window.location.search.replace('?=', '')
    dispatch(fetchProductById(productId));
  }, []);

  useEffect(() => {
    if(productDetails?.data) setSelectedQuantity(Object.keys(productDetails?.data?.price)[0])
  }, [productDetails?.data?.price])

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
                  <Link to={routePath}>{route}</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">{productDetails?.data?.name}</Link>
                </li>
              </ol>
            </nav>
          </div>
          <div className="container productDetailWrapper">
            <div className="col-12 col-md-6 p-0 pb-3 px-md-3 productPictureAndCarausel">
              <img className="productMainPicture" src={origin() + productDetails?.data?.imageUrls[0]} alt="mainImg" />
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
                        onChange={() => setShapeSelected("square")}
                      />
                      <Form.Check
                        type={type}
                        id={`standard`}
                        label={`Standard`}
                        name="shape"
                        inline
                        onChange={() => setShapeSelected("standard")}
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
                  <Form.Select onChange={e => setSelectedQuantity(e.target.value)}>
                    {typeof productDetails?.data?.price === "object" &&
                      Object.keys(productDetails?.data?.price)
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
                onClick={() => setShowBoard("create")}
                className="btn btn-primary">
                Create the Design
              </button>

              <button
                onClick={() => setShowBoard("upload")}
                className="btn btn-light"
                style={{ marginLeft: "20px", background: "burlywood" }}>
                Upload the Design
              </button>
              {showBoard !== "none" && (
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
                    <div
                      className="closeButton"
                      onClick={() => setShowBoard("none")}>
                      <i className="fa fa-arrow-left" />
                      <img src={iconImg} alt="closeModal" />
                    </div>
                    <DesignTool board={showBoard} saveAndProceed={(imgUrl) => saveAndProceed(imgUrl)} />

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
