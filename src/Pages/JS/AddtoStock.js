import React from "react";
import "../CSS/AddtoStock.css"
import Logo from '../../AggieReuse-additional-color.png'; 
import runPythonProgram from "../../api/jsToPython";
//frontend file-- dynamic display
//add drop downs

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
            <div className="add-body">
                <div className="rd-container">
                    <div className="rd-box">
                        <p className="rd-text">Record Donation:</p>
                    </div>
                </div>
                <div className="user-area">
                    <div className="ua-left">
                        <div className="scan">
                            <div className="scan-top">
                                <button onClick = {runPythonProgram} className="scan-button" type="button">SCAN Item</button>
                            </div>
                            <div className="scan-output">
                                <p className="scan-text" id="scanned">ITEM SCANNED:</p>
                                <div className="scan-text"></div>
                            </div>
                            <div className="confirmation">
                                <button className="scan-button" type="button">Try Again</button>
                            </div>
                            <div className="manual-input">
                                <input className="input" name="item" placeholder="Item"></input>
                                <button type="button" className="scan-button">Input Manually</button>
                            </div>
                            <div className="confirmation">
                                <input name="qty" placeholder="Quantity"></input>
                                <button className="scan-button" type="button">Confirm</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="ua-right">
                        <div className="itemList"></div>
                        <div className="button-container">
                            <button className="finish" type="button">FINISH</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}