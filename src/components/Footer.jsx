import React from 'react'

const Footer = () => {
  

 
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Brand */}
        <div className="footer-brand">
          <h2>Revnue</h2>
          <p>Empowering your revenue growth.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3>Follow</h3>
            <ul className="social">
              <li><a href="#">🐦</a></li>
              <li><a href="#">📘</a></li>
              <li><a href="#">📸</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2026 Revnue. All rights reserved.
      </div>
    </footer>
  );
};

 


export default Footer
