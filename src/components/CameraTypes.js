import React from 'react';

function CameraTypes() {
  const cameraTypes = [
    {
      id: 1,
      name: 'Compact Camera',
      description: 'A compact camera is a small and lightweight camera that is easy to carry around. It is great for casual photography and on-the-go shooting.',
      image: '/compact camera.png',
    },
    {
      id: 2,
      name: 'DSLR Camera',
      description: 'A DSLR camera (Digital Single-Lens Reflex) is a professional-grade camera known for its versatility and image quality. It offers interchangeable lenses and manual controls.',
      image: '/dslr camera.png',
    },
    {
      id: 3,
      name: 'Mirrorless Camera',
      description: 'A mirrorless camera is a compact alternative to DSLRs, offering excellent image quality and the convenience of a smaller form factor. It is suitable for both amateurs and professionals.',
      image: '/mirrorless camera.png',
    },
  ];

  return (
    <div className="camera-types">
      <div className="camera-column">
        {cameraTypes.map((camera) => (
          <div key={camera.id} className="camera">
            <img src={camera.image} alt={camera.name} />
            <h3>{camera.name}</h3>
            <p>{camera.description}</p>
          </div>
        ))}
      </div>
      <div className="view-more-container">
        <button className="view-more">View More</button>
      </div>
    </div>
  );
}

export default CameraTypes;
