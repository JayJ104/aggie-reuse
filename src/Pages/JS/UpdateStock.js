import React from "react";
import "../CSS/UpdateStock.css"
import Logo from '../../AggieReuse-additional-color.png';
import { useNavigate } from "react-router-dom";

//add counter, dynamic display

export default function UpdateStock(){
    const navigate = useNavigate();
    return(
        <div className="checkout-home">
            <div className="header">
                <div className="navbar-left">
                    <img src={Logo} className="logo"></img>
                </div>
                <div className="header-text">
                    <p className="storeName">Aggie Reuse Store</p>
                    <p className="ASUCD">ASUCD</p>
                </div>
            </div>
            <div className="checkout-body">
                <div className="rd-container">
                    <div className="rd-box">
                        <p className="rd-text">Start Checkout:</p>
                    </div>
                </div>
                    <div className="left-area">
                        <div className="button-row">
                            <button className="button1" name = "Books" type="button">Books</button>
                            <button className="button1" name = "Dress" type="button">Dress</button>
                            <button className="button1" name = "Hat" type="button">Hat</button>
                            <button className="button1" type="button">Household</button>
                            <button className="button1" type="button">Jacket</button>
                            <button className="button1" type="button">Long sleeve/button up</button>
                        </div>
                        <div className="button-row">
                            <button className="button1" type="button">Pants/Jeans</button>
                            <button className="button1" type="button">Ring/Jewelry</button>
                            <button className="button1" type="button">School supplies</button>
                            <button className="button1" type="button">Shirts</button>
                            <button className="button1" type="button">Shoes</button>
                            <button className="button1" type="button">Shorts</button>
                        </div>
                        <div className="button-row">
                            <button className="button1" type="button">Skirt</button>
                            <button className="button1" type="button">Sunglasses</button>
                            <button className="button1" type="button">Sweater</button>
                            <button className="button1" type="button">Cardigan</button>
                            <button className="button1" type="button">Tank top</button>
                            <button className="button1" type="button">Misc</button>
                        </div>
                    </div>
                    <div className="button-container">
                            <button onClick={() => navigate("/")} className="finish" type="button">FINISH</button>
                    </div>               
            </div>
        </div>
    )
}
