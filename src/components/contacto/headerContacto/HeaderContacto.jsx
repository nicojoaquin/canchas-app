const HeaderContacto = () => {
  return (
    <header className="container-fluid bg-success text-light w-100 d-flex justify-content-evenly align-items-center p-3">
      <div>
        <h3>Seguinos en nuestras redes sociales</h3>
      </div>
      <div>
        <i
          className="btn bi bi-instagram text-light"
          style={{ fontSize: "2rem" }}
        ></i>
        <i
          className="btn bi bi-facebook ms-2 text-light"
          style={{ fontSize: "2rem" }}
        ></i>
        <i
          className="btn bi bi-youtube ms-2 text-light"
          style={{ fontSize: "2rem" }}
        ></i>
      </div>
    </header>
  );
};

export default HeaderContacto;
