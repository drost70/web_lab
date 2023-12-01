import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity } from '../components/redux/actions';

import productsData from './productsData';

function CameraDetailsPage() {
  const { id } = useParams();
  const camera = productsData.find((camera) => camera.id.toString() === id);
  const cartItems = useSelector((state) => state.cartItems); 

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === camera.id);

    if (existingItemIndex !== -1) {
      dispatch(updateQuantity(camera.id, cartItems[existingItemIndex].quantity + quantity));
    } else {
      dispatch(addToCart({ ...camera, quantity }));
    }
    console.log(`Camera ${camera.name} added to cart.`);
  };

  if (!camera) {
    return <p>Camera not found!</p>;
  }


  return (
    <div className="camera-details-page">
      <main>
        <div className="camera-details">
          <div className="camera-details-left">
            <img src={camera.image} alt={camera.name} />
          </div>
          <div className="camera-details-right">
            <h2>{camera.name}</h2>
            <p>{camera.description}</p>
            <div className="select-container">
              <label htmlFor="quantityField">Quantity:</label>
              <input
                type="number"
                id="quantityField"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
            </div>
            <div className="price">{`Price: $${(camera.price * quantity).toFixed(2)}`}</div>
            <div className="navigation-buttons">
              <Link to="/catalog" className="go-back-link">
                Go Back
              </Link>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CameraDetailsPage;
