import React from 'react';
import NewCameraComponent from './NewCameraComponent';


function CameraList({ cameraTypes }) {
  return (
    <div className="camera-types">
      <div className="camera-column">
        {cameraTypes.map((camera) => (
          <NewCameraComponent key={camera.id} camera={camera} />
        ))}
      </div>
    </div>
  );
}

export default CameraList;
