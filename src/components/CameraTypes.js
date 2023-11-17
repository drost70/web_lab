import React, { useState } from 'react';

function CameraTypes() {
  const [totalDisplayed, setTotalDisplayed] = useState(3); 

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
    {
      id: 4,
      name: 'Sony',
      description: 'Introducing the Sony, a state-of-the-art digital camera designed to elevate your photography to new heights.',
      image: '/sony 2.png',
    },
    {
      id: 5,
      name: 'Canon',
      description: 'Introducing the Canon, a cutting-edge digital camera designed to redefine your photography experience. .',
      image: '/canon 2.png',
    },
  ];

  // Додаємо новий рядок після кожних 3 камер
const handleViewMore = () => {
  const remainingItems = cameraTypes.length - totalDisplayed;
  const newTotalDisplayed = totalDisplayed + Math.min(3, remainingItems);

  setTotalDisplayed(newTotalDisplayed);
};

// Використовуємо групування в рядок для нових камер
return (
  <div className="camera-types">
    <div className="camera-column">
      {cameraTypes.slice(0, totalDisplayed).map((camera, index) => (
        <div key={camera.id} className="camera">
          <img src={camera.image} alt={camera.name} />
          <h3>{camera.name}</h3>
          <p>{camera.description}</p>
          {/* Додаємо новий рядок після кожних 3 камер */}
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