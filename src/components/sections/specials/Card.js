import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = ({ image, title, price, description }) => {
  return (
    <article className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="text">
        <div className="price">
          <h4>{title}</h4>
          <span>${price}</span>
        </div>
        <div className="card-description">
          <p>{description}</p>
          <Link to="./order" className="button-secondary">
            Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;
