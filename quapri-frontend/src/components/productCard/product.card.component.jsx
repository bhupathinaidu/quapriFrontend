import React from "react";
import "./product.card.component.css"

const ProductCardComponent = ({ item }) => {
    return (<div className='popularProduct'>
        <img src={item.imgSrc} alt={item.id} />
        <p>{item.label}</p>
    </div>)
}

export default ProductCardComponent