import React, { useState } from "react";
import "../CSS/AddtoStock.css"
import Logo from '../../AggieReuse-additional-color.png'; 
import runPythonProgram from "../../api/jsToPython";
import { useNavigate } from "react-router-dom";


export default function Add() {
    const [selectedItem, setSelectedItem] = useState(""); // State to store the selected item
  
    const handleSelectChange = (event) => {
      setSelectedItem(event.target.value); // Update the selected item in state
    };

return (
    <div className="addPage">
      <div className="header">
        <div className="navbar-left">
          <img src={Logo} className="logo" alt="Logo" />
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
                <button onClick={runPythonProgram} className="scan-button" type="button">SCAN Item</button>
              </div>
              <div className="scan-output">
                <p className="scan-text" id="scanned">ITEM SCANNED:</p>
                <div className="scan-text"></div>
              </div>
              <div className="confirmation">
                <button className="scan-button" type="button">Try Again</button>
              </div>
              <div className="manual-input">
                {/* Dropdown menu */}
                <select className="input" name="item" value={selectedItem} onChange={handleSelectChange}>
                  <option value="">Select a category item</option>
                  <option value="item1">Books</option>
                  <option value="item2">Dress</option>
                  <option value="item3">Hat</option>
                  <option value="item4">Household</option>
                  <option value="item5">Jacket</option>
                  <option value="item6">Long-sleeve/button up</option>
                  <option value="item7">Pants/Jeans</option>
                  <option value="item8">Ring/Jewelry</option>
                  <option value="item9">School supplies</option>
                  <option value="item10">Shirts</option>
                  <option value="item11">Shoes</option>
                  <option value="item12">Shorts</option>
                  <option value="item13">Skirt</option>
                  <option value="item14">Sunglasses</option>
                  <option value="item15">Sweater</option>
                  <option value="item16">Cardigan</option>
                  <option value="item17">Tank top</option>
                  <option value="item18">Misc</option>
                </select>
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
  );
}