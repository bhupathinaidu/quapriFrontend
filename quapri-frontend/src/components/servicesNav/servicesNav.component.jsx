import React from "react";
import "./servicesNav.component.css"

const ServiceNavbarComponent = () => {
    return (
        <nav className="serviceNavbarContainer">
            <div className="serviceNavbarWrapper">
                <ul className="serviceList">
                    <li>Same Day Delivery</li>
                    <li>Stationery</li>
                    <li>Corporate Gifts</li>
                    <li>Drinkware</li>
                    <li>Packaging</li>
                    <li>Apparel</li>
                    <li>Signs & Marketing</li>
                    <li>Awards</li>
                    <li>Photo Gifts</li>
                </ul>
            </div>
        </nav>
    )
}

export default ServiceNavbarComponent