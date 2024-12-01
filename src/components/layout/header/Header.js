import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/Logo.svg";
import MenuIcon from "../assets/🦆 icon _hamburger menu.svg";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  const menuItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Menu", link: "/menu" },
    { id: 4, label: "Reservations", link: "/reservations" },
    { id: 5, label: "Order Online", link: "/order" },
    { id: 6, label: "Login", link: "/login" },
  ];

  const onClickImage = () => {
    navigate("/");
  };

  return (
    <header className="container">
      <div className="header-logo">
        <img src={Logo} alt="logo" onClick={onClickImage} />
      </div>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.id} className={`item ${isMenuOpen ? "open" : ""}`}>
              <NavLink
                to={item.link}
                className={`nav-link ${location.pathname === item.link ? "active" : ""}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <img src={MenuIcon} alt="menu-icon" />
      </div>
    </header>
  );
}

export default Header;
