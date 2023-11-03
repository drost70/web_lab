import React from 'react';

function Navigation() {
  return (
    <nav>
      <div className="cameras-info">
        <img src="/cameras.png" alt="cameras" />
        <div className="cameras-description">
          <h2>Camera info</h2>
          <p>A camera is a device that captures images and is used for taking photographs and recording videos. It plays a vital role in preserving important moments in your life, documenting your travels, and various other situations. With a camera, you can create lasting memories and share them with others.</p>
          <p>Modern cameras come in a wide range of types and models, each designed for specific purposes. From compact point-and-shoot cameras for casual photography to advanced DSLR and mirrorless cameras for professional photography, there is a camera suited for every need.</p>
          <p>Cameras have evolved significantly over the years, with features like high-resolution sensors, powerful zoom capabilities, and advanced image processing. They offer the ability to capture stunning visuals with exceptional clarity and detail.</p>
          <button>Read More</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
