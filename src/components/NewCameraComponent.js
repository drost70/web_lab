import React from 'react';

function NewCameraComponent({ camera }) {
  return (
    <div className="camera">
      <img src={camera.image} alt={camera.name} />
      <h3>{camera.name}</h3>
      <p>{camera.description}</p>
    </div>
  );
}

export default NewCameraComponent;
