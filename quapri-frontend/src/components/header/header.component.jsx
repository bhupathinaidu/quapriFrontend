import React from "react";
import "./header.component.css"
import logo from "../../assets/quapri_logo.png"
import SearchBoxComponent from "../searchBox/searchbox.component";
import cart from "../../assets/shoppingCartIcon.svg"

const HeaderComponent = () => {

    return (
        <div className="headerContainer">
            <div className="logoSearchContainer">
                <img className="logo" src={logo} />
                <SearchBoxComponent placeholder="Search" />
            </div>
            <div className="callLoginStoreContainer">
                <a href="#" className="callUs link">
                    <div className="mob">+91******8989</div>
                    <div className="callUsText">call us to place an order</div>
                </a>
                <a href="#" className="loginSignup link">
                    Login / Signup
                </a>
                <div className="cartImg">
                    <img src={cart} />
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;