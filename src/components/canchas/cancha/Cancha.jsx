const Cancha = ({ nombre, url_imagen, jugadores, techo, horarios }) => {
  return (
    <article className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={url_imagen}
            className="img-fluid rounded-start"
            alt={nombre}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            {jugadores && <h6>Capacidad: {jugadores} jugadores</h6>}
            <p className="card-text">Techada: {techo ? "Si" : "No"}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cancha;
