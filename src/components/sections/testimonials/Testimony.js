import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testimony({ image, name, rating, text }) {
  return (
    <div className="testimony">
      <div className="rating">
        {[...Array(rating)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} />
        ))}
      </div>
      <div className="profile">
        <div className="image-box">
          <img src={image} alt={`${name}`} />
        </div>
        <h3>{name}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Testimony;
