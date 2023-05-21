import React from "react";
import "../CSS/AddtoStock.css"
import Logo from '../../AggieReuse-additional-color.png'; 


export default function Add(){
    return(
        <div className="addPage">
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
            </div>
        </div>
    )
}