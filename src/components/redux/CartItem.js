import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item, onUpdateQuantity, onRemoveFromCart }) => {
  const { id, name, quantity, price, image } = item;

  return (
    <div className="cart-item">
      <Link to={`/catalog/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div className="item-details">
        <p className="item-name">{name}</p>
        <p className="item-price">{`Price: $${(price * quantity).toFixed(2)}`}</p>
        <div className="quantity-controls">
          <button onClick={() => onUpdateQuantity(id, quantity - 1)}>-</button>
          <span className="item-quantity">{quantity}</span>
          <button onClick={() => onUpdateQuantity(id, quantity + 1)}>+</button>
        </div>
        <button onClick={() => onRemoveFromCart(id)}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CartItem;
