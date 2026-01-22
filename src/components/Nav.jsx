import React, { useState } from "react";
 

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Navbar">
      <div className="logo">Revnue</div>

      {/* Desktop Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Nav;
