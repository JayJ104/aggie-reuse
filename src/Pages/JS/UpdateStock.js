import React, { useState } from "react";
import "../CSS/UpdateStock.css"
import Logo from '../../AggieReuse-additional-color.png';
import { useNavigate } from "react-router-dom";


//add counter, dynamic display
export default function UpdateStock() {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(""); // State to store the selected item
  
    const handleSelectChange = (event) => {
      setSelectedItem(event.target.value); // Update the selected item in state
    };


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
                <div className="u-a">
                    <div className="left-area">
                        <div className="button-row">
                            <select className="button1" name="Books" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Books</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Dress" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Dress</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Hat" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Hat</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Household" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Household</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Jacket" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Jacket</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Long-sleeve/button up" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Long-sleeve/button up</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                        </div>
                        <div className="button-row">
                        <select className="button1" name="Pants/Jeans" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Pants/Jeans</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Ring/Jewelry" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Ring/Jewelry</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="School supplies" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">School supplies</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Shirts" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Shirts</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Shoes" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Shoes</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Shorts" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Shorts</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                        </div>
                        <div className="button-row">
                        <select className="button1" name="Skirt" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Skirt</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Sunglasses" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Sunglasses</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Sweater" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Sweater</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Cardigan" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Cardigan</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Tank top" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Tank top</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                <select className="button1" name="Misc" value={selectedItem} onChange={handleSelectChange}>
                                 <option value="">Misc</option>
                                     <option value="Quan1">1</option>
                                     <option value="Quan2">2</option>
                                     <option value="Quan3">3</option>
                                     <option value="Quan4">4</option>
                                     <option value="Quan5">5</option>
                                     <option value="Quan6">6</option>
                                     <option value="Quan7">7</option>
                                     <option value="Quan8">8</option>
                                     <option value="Quan9">9</option>
                                     <option value="Quan10">10</option>
                </select>
                        </div>
                    </div>
                    <div className="right-area">
                        <div className="itemList"></div>
                        <div className="button-container">
                            <button onClick = {() => navigate("/")} className="finish" type = "button">FINISH</button>
                            </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}
