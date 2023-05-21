import React from "react";
import "../CSS/AddtoStock.css"
import Logo from '../../AggieReuse-additional-color.png'; 
import { useNavigate } from "react-router-dom";


//frontend file-- dynamic display
//add drop downs

function unhide() {
    var hid = document.getElementsByClassName("exp");
    // Emulates jQuery $(element).is(':hidden');
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
}
export default function Add(){
    const navigate = useNavigate();
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
            <body>
            
            <div className="add-body">
                <div className="rd-container">
                    <div className="rd-box">
                        <p className="rd-text">Record Donation:</p>
                    </div>
                </div>
                    <div className="ua-left">
                        <div className="scan">
                            <div className="scan-top">
                                <button onclick="unhide()" className="scan-button" type="button">SCAN Item</button>
                                
                            </div>
                            <div className="scan-output">
                                <p className="scan-text" id="scanned">ITEM SCANNED:</p>
                                <div className="scan-text">Sshirt</div>
                             
                            </div>
                            <div className="confirmation">
                                <button className="scan-button" type="button">Try Again</button>
                            </div>
                            <div className="manual-input">
                                <input className="input" name="item" placeholder="Item"></input>
                                <button  type="button" className="scan-button">Input Manually</button>
                            </div>
                            <div className="confirmation">
                                <input name="qty" placeholder="Quantity"></input>
                                <button onclick= "addItem()" className="scan-button" type="button">Confirm</button>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="button-container2">
                            <button onClick={() => navigate("/")} className="finish" type="button">FINISH</button>
                    </div>
                </div>
            
            </body>
        </div>
    )
}