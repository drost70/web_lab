import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <img src="/camera.png" alt="Site Icon" className="footer-icon" />
          <p className="footer-text">
            Capturing Moments, Unleashing Creativity: Your Gateway to Photography Excellence in 2023.
          </p>
        </div>
        <div className="footer-right">
          <img src="/youtube.png" alt="YouTube" />
          <img src="/facebook.png" alt="Facebook" />
          <img src="/twitter.png" alt="Twitter" />
          <img src="/linkedin.png" alt="LinkedIn" />
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="copyright">&copy; 2023 IoT. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
