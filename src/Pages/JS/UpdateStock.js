import React from "react";
import "../CSS/UpdateStock.css"
import { useNavigate } from "react-router-dom";
import Logo from '../../AggieReuse-additional-color.png';

export default function UpdateStock(){
    const navigate = useNavigate();
    return(
        <div className="home">
            <div className="header">
                <div className="navbar-left">
                    <img src={Logo} className="logo"></img>
                </div>
                <div className="header-text">
                    <p className="storeName">Aggie Reuse Store</p>
                    <p className="ASUCD">ASUCD</p>
                </div>
            </div>
            <div className="main">
                <button className="button" type="button">Start Checkout</button>
                <button className="button1" type="button1">Books</button>
                <button className="button1" type="button1">Dress</button>
                <button className="button1" type="button1">Hat</button>
                <button className="button1" type="button1">Household</button>
                <button className="button1" type="button">Jacket</button>
                <button className="button1" type="button">Long sleeve/button up</button>
                <button className="button1" type="button1">Pants/Jeans</button>
                <button className="button1" type="button1">Ring/Jewelry</button>
                <button className="button1" type="button1">School supplies</button>
                <button className="button1" type="button1">Shirts</button>
                <button className="button1" type="button1">Shoes</button>
                <button className="button1" type="button1">Shorts</button>
                <button className="button1" type="button1">Skirt</button>
                <button className="button1" type="button1">Sunglasses</button>
                <button className="button1" type="button1">Sweater</button>
                <button className="button1" type="button1">Cardigan</button>
                <button className="button1" type="button1">Tank top</button>
                <button className="button1" type="button1">Misc</button>
            </div>
        </div>
    )
}
