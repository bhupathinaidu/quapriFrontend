import React, { useEffect, useState } from "react";
import mainImg from "../../assets/test_plp_product.jpeg";
import { Link } from "react-router-dom";
import "./product.detail.component.css"
import { productDetail, fetchProductById } from "../../store/product/product.reducer";
import { useDispatch, useSelector } from "react-redux";
import { Tldraw, TldrawEditor } from "@tldraw/tldraw";
import '@tldraw/tldraw/tldraw.css'
import DesignTool from "../canvas/canvas.component";


const ProductDetailComponent = ({ route, subRoute }) => {
    const dispatch = useDispatch();
    const productData = useSelector(productDetail);
    const { productDetails, isLoading, isError } = productData;
    const [showBoard, setShowBoard] = useState(false)

    useEffect(() => {
        dispatch(fetchProductById("QPVPPC"))
    }, [])

    const persistenceId = "tldraw-example";

    const handleMount = (app) => {
        // You can use the app API here! e.g. app.selectAll()
        app.selectAll()
    };

    return (
        <div style={{ opacity: isLoading ? "0.5" : "1", position: "relative", minHeight: "650px" }}>
            {
                isLoading ? <h1 style={{ height: "500px", textAlign: "center" }}>...Loading</h1> :
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
                                <h1 class="pb-3">{productDetails?.data?.name}</h1>
                                <p style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.6)" }}>{productDetails?.data?.description}</p>
                                <button onClick={() => setShowBoard(true)}>create a design</button>
                                {showBoard && <div style={{ height: "300px", width: "600px" }}>
                                    <button onClick={() => setShowBoard(false)} style={{ position: "absolute", top: "0", zIndex: "9999" }}>Close</button>
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "0px",
                                            left: "30px",
                                            width: "93vw",
                                            height: "100vh",
                                            background: "lightGrey",
                                            zIndex: "999"
                                        }}
                                    >
                                        {//<Tldraw id={persistenceId} onMount={handleMount} />
}
                                        <DesignTool />
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </>}
        </div>
    )
}

export default ProductDetailComponent;