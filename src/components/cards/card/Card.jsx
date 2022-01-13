import { Link } from "react-router-dom";

const Card = ({ deporte, url_imagen }) => {
  return (
    <div
      className="card shadow-lg rounded-3 mx-3 mt-3"
      style={{ width: "18rem" }}
    >
      <img src={url_imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{deporte}</h5>
        <p className="card-text">Explora nuestras canchas de {deporte}!</p>
        <Link to={`/${deporte.toLowerCase()}`} className="btn btn-success">
          Ver canchas
        </Link>
      </div>
    </div>
  );
};

export default Card;
