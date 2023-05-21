//finish button-- take values from frontend and perform the calculations in the excel

import React, { useState } from 'react';
import {itemOrder, quantity} from '../Pages/JS/UpdateStock';

const OrderDisplay = ({ itemOrder, quantity }) => {
  return (
    <div>
      <h2>Order Details:</h2>
      <p>Item Order: {itemOrder}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default OrderDisplay;