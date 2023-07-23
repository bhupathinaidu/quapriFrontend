import React from "react";
import mainImg from "../../assets/test_plp_product.jpeg";
import { Link } from "react-router-dom";
import "./product.detail.component.css"

const ProductDetailComponent = ({ route, subRoute }) => {
    return (
        <div>
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
                <div className="productPictureAndCarausel">
                    <img className="productMainPicture" src={mainImg} alt="mainImg" />
                </div>
            </div>
        </div>
    )
}

export default ProductDetailComponent;