import React from "react";
import "../CSS/Homepage.css"
import { useNavigate } from "react-router-dom";
import Logo from '../../AggieReuse-additional-color.png'; 

export default function Homepage(){
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
            <div className="body">
                <button className="button" type="button">Record Donation
                </button>
                <button className="button" type="button">Start Checkout</button>
            </div>
        </div>
    )
}