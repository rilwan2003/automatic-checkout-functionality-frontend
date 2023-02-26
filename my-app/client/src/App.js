import React, { useState } from 'react';
import axios from 'axios';
import CheckoutForm from './components/CheckoutForm';

function App() {
  const [product, setProduct] = useState(null);

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleCheckout = (data) => {
    data.product_id = product;

    axios.post('/checkout', data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h1>Auto Checkout</h1>
      <div className="form-group">
        <label htmlFor="product">Select a product:</label>
        <select className="form-control" id="product" onChange={handleProductChange}>
          <option>Select a product</option>
          <option value="1">Product 1</option>
          <option value="2">Product 2</option>
          <option value="3">Product 3</option>
        </select>
      </div>
      {product && <CheckoutForm handleCheckout={handleCheckout} />}
    </div>
  );
}

export default App;
