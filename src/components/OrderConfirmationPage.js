import React from 'react';
import { Link } from 'react-router-dom';

function OrderConfirmationPage() {
  return (
    <div className="order-confirmation-page">
      <img
        src="/1687.png"  
        alt="Order Confirmation"
      />
      <h2>Success!</h2>
      <p>Your order has been confirmed. Thank you for shopping with us!</p>
      <Link to="/catalog">Go Back to Catalog</Link>
    </div>
  );
}

export default OrderConfirmationPage;
