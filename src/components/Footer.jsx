import React from 'react'
import './style.css'

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* Company Info */}
      <div className="footer-section">
        <h3>FurniFlex</h3>
        <p>Transform your space with stylish and functional furniture..</p>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Shop</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2025 FurniFlex. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer
