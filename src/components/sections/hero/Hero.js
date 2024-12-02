import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="hero container">
        <div className="info">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Reserve a table
          </p>
          <Link className="button-primary" to="/reservations">
            Reserve a Table
          </Link>
        </div>
        <img
          src="./icons_assets/restaurant-food.jpg"
          className="hero-image"
          alt="Little Lemon meal"
        ></img>
      </div>
    </section>
  );
}

export default Hero;
