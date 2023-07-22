import React from "react";
import { Link } from "react-router-dom";
import "./product.listing.component.css";

const ProductListingComponent = ({ properties }) => {
    const { route, mainBanner, productList } = properties;
    return (
        <div>
            <div class="container mt-2">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li class="breadcrumb-item">
                            <Link to="/same-day-delivery">{route}</Link>
                        </li>
                    </ol>
                </nav>
            </div>
            <div class="container">
                <img className="mainBanner" src={mainBanner} alt="mainBanner" />
            </div>
            <div style={{ marginBottom: "30px" }} class="container">
                <div>
                    <h1 style={{ color: "rgb(56, 65, 74)", textAlign: "center", paddingBottom: "3px", paddingTop: "5px", fontSize: "30px" }}>{route} Products</h1>
                </div>
            </div>
            <div style={{ marginBottom: "30px" }} class="container productList">
                {productList.map(item => <Link to="/same-day-delivery/customizable-products/same-day-business-cards"><div>
                    <img style={{ height: "285px", width: "285px" }} src={item.imgUrl} />
                    <p>{item.label}</p>
                    <p>{item.price}</p>
                </div></Link>)}
            </div>
        </div>
    )
}

export default ProductListingComponent;
