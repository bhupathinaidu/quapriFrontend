import React, { useEffect } from "react";
import "./product.card.component.css";
import { Link } from "react-router-dom";

const ProductCardComponent = ({ item }) => {
  return (
    <div className="popularProduct" key={item.id}>
      <Link to={item.src}>
        <img src={item.imgSrc} alt={item.id} />
        <p>{item.label}</p>
      </Link>
    </div>
  );
};

export default ProductCardComponent;
