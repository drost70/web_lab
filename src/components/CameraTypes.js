import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CameraTypes() {
  const [totalDisplayed, setTotalDisplayed] = useState(3);
  const [cameraTypes, setCameraTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiUrl = 'http://localhost:8080/api/camera-types';
      const response = await axios.get(apiUrl);
      setCameraTypes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching camera types:', error);
    }
  };

  const handleViewMore = () => {
    const remainingItems = cameraTypes.length - totalDisplayed;
    const newTotalDisplayed = totalDisplayed + Math.min(3, remainingItems);
    setTotalDisplayed(newTotalDisplayed);
  };

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (!cameraTypes.length) {
    return <div>No camera types available.</div>;
  }

  const staticImageURL = '/cameras.png';

  return (
    <div className="camera-types">
      <div className="camera-column">
        {cameraTypes.slice(0, totalDisplayed).map((camera, index) => (
          <div key={camera.id} className="camera">
            <img src={staticImageURL} alt={camera.name} />
            <h3>{camera.name}</h3>
            <p>{camera.description}</p>
            {index % 3 === 2 && <div key={`spacer-${index}`} className="spacer" />}
          </div>
        ))}
      </div>
      <div className="view-more-container">
        <button className="view-more" onClick={handleViewMore}>
          View More
        </button>
      </div>
    </div>
  );
}

export default CameraTypes;
