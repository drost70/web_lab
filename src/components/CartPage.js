// CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/redux/CartItem';
import { removeFromCart, updateQuantity } from '../components/redux/actions';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const handleUpdateQuantity = (id, newQuantity) => {
    const validQuantity = Math.max(0, newQuantity);
    dispatch(updateQuantity(id, validQuantity));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      <div className="total-amount">
        <p>Total Amount: ${getTotalAmount().toFixed(2)}</p>
      </div>
      <div className="cart-buttons">
        <Link to="/catalog" className="go-back-link">
          Back to Catalog
        </Link>
        <button onClick={() => console.log('Continue shopping')}>Continue</button>
      </div>
    </div>
  );
}

export default CartPage;
