import React from "react";
import "./navbar.component.css"

const NavbarComponent = () => {
    return (
        <nav className="navbarContainer">
            <div className="navbarWrapper">
                <a className="link" href="#">Customer Support</a>
                <div className="otherNavLinks">
                    <a className="link" href="#">Find Quapri Store</a>
                    <a className="link" href="#">Sample Kit</a>
                    <a className="businessLink" href="#">Business Pricing</a>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent