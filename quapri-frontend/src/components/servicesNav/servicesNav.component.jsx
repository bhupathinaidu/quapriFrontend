import React from "react";
import "./servicesNav.component.css"
import { Link } from "react-router-dom";

const ServiceNavbarComponent = () => {
    return (
        <nav className="serviceNavbarContainer">
            <div className="serviceNavbarWrapper">
                <ul className="serviceList">
                    <li><Link to="/same-day-delivery">Same Day Delivery</Link></li>
                    <li><Link to="/stationery">Stationery</Link></li>
                    <li><Link to="/corporate-gifts">Corporate Gifts</Link></li>
                    <li><Link to="/drinkware">Drinkware</Link></li>
                    <li><Link to="/packaging">Packaging</Link></li>
                    <li><Link to="/apparel">Apparel</Link></li>
                    <li><Link to="/marketing">Signs & Marketing</Link></li>
                    <li><Link to="/awards">Awards</Link></li>
                    <li><Link to="/photo-gifts">Photo Gifts</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default ServiceNavbarComponent;