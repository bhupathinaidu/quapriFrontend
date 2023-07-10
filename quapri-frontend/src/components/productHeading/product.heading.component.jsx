import React from "react";
import "./product.heading.component.css"

const ProductHeadingComponent = ({ heading }) => {
    return (<div className="productHeadingContainer"><h2 className="cardGroupHeading">{heading}</h2></div>)
}

export default ProductHeadingComponent