import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import './UnderConstruction.css';

export default function UnderConstruction() {
  return (
    <>
      {/* <FontAwesomeIcon icon={faPersonDigging} /> */}
      {/* <FontAwesomeIcon icon={faPersonDigging} size="2xl" style={{color: "#495e57", height: 200, textAlign: "center"}} /> */}
      {/* <h1>Page Under Construction</h1> */}
      <div className="container under-construction">
      <h1>Page under construction</h1>
      <FontAwesomeIcon icon={faPersonDigging} size="3x" style={{color: "#495e57"}} />
    </div>
    </>
  );
}