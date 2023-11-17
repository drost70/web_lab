import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from './productsData';

function CameraDetailsPage() {
  const { id } = useParams();
  const camera = productsData.find((camera) => camera.id.toString() === id);

  if (!camera) {
    return <p>Camera not found!</p>;
  }

  const handleAddToCart = () => {
    console.log(`Camera ${camera.name} added to cart.`);
  };

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
              <label htmlFor="selectField">Countable Field:</label>
              <select id="selectField">
                <option value="option1">1337...</option>
              </select>
            </div>
            <div className="select-container">
              <label htmlFor="selectField">Selectable Field:</label>
              <select id="selectField">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className="price">{`Price: $${camera.price}`}</div>
            <div className="navigation-buttons">
              <Link to="/catalog" className="go-back-link">Go Back</Link>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CameraDetailsPage;
