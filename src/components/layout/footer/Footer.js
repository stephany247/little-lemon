import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

import logo from "../assets/logo-white.png";

function Footer() {
  const location = useLocation();
  const siteLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/menu", text: "Menu" },
    { to: "/reservations", text: "Reservations" },
    { to: "/order", text: "Order Online" },
    { to: "/login", text: "Login" },
  ];

  const socialLinks = [
    { href: "https://twitter.com/", icon: faTwitter },
    { href: "https://facebook.com/", icon: faFacebook },
    { href: "https://instagram.com/", icon: faInstagram },
    { href: "https://www.tiktok.com/", icon: faTiktok },
  ];

  const contactDetails = [
    { icon: faLocationDot, text: "1234 Windy Lane, Chicago, IL 60614", to: "" },
    { icon: faPhone, text: "(312) 555-7890", to: "" },
    {
      icon: faEnvelope,
      text: "contact@littlelemonchicago.com",
      to: "mailto:youremail@gmail.com",
    },
  ];

  return (
    <footer>
      <section className="footer container">
        <div className="logo">
          <img src={logo} alt="Footer Logo" />
        </div>

        <nav className="links">
          <h3>SITE MAP</h3>
          <ul>
            {siteLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={`nav-link ${
                    location.pathname === link.to ? "active" : ""
                  }`}
                  aria-label={`Go to ${link.text} page`}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <address className="contact">
          <h3>CONTACT</h3>
          <ul>
            {contactDetails.map((contact, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={contact.icon} />
                <Link to={contact.to}>{contact.text}</Link>
              </li>
            ))}
          </ul>
        </address>

        <div className="socials">
          <h3>CONNECT WITH US</h3>
          <ul>
            {socialLinks.map((social, index) => (
              <li key={index}>
                <Link to={social.href}>
                  <FontAwesomeIcon icon={social.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
