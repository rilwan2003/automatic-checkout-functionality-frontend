import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CheckoutForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [productId, setProductId] = useState('');
  const [timer, setTimer] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, address, product_id: productId };
    axios.post('/api/checkout', data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Checkout Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Product ID:
          <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
        </label>
        <button type="submit">Checkout</button>
      </form>
      <p>Time Elapsed: {timer} seconds</p>
    </div>
  );
}

export default CheckoutForm;
