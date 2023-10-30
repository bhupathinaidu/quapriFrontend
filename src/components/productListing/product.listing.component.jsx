import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./product.listing.component.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory, productListData } from "../../store/product/productList.reducer";
import { origin } from "../../api/origin";

const ProductListingComponent = ({ properties }) => {
  const { route, mainBanner, productList, id } = properties;
  const dispatch = useDispatch();
  const productListValue = useSelector(productListData);

  useEffect(() => {
    dispatch(fetchProductsByCategory(id))
  }, [id])
  console.log({ productListValue })
 
  return (
    <div>
      <div className="container mt-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">{route}</Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="container">
        <img className="mainBanner" src={mainBanner} alt="mainBanner" />
      </div>
      <div style={{ marginBottom: "30px" }} className="container">
        <div>
          <h1
            style={{
              color: "rgb(56, 65, 74)",
              textAlign: "center",
              paddingBottom: "3px",
              paddingTop: "5px",
              fontSize: "30px",
            }}>
            {route} Products
          </h1>
        </div>
      </div>
      <div style={{ marginBottom: "30px" }} className="container productList">
        {productListValue.isLoading ? <p>...Loading</p> : productListValue?.productList?.data && productListValue.productList.data.map((item) => (
          <Link to={`${window.location.pathname}/customizable-products?=${item.productId}`}>
            <div>
              <img
                style={{ height: "285px", width: "285px" }}
                src={origin() + item.imageUrls[0]}
              />
              <p className="productPrice">{item.name}</p>
              <p className="productName">{'₹' + item.price[Object.keys(item.price)[0]].toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListingComponent;
