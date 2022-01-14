import { useContext, useState } from "react";
import { CanchasContext } from "../../../context/CanchasContext";
import toast, { Toaster } from "react-hot-toast";

const errorAlert = () =>
  toast.error("Seleccione un horario!", {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

const addAlert = () =>
  toast.success("Has agregado una nueva reserva!", {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
    icon: "👏",
  });

const Cancha = ({
  cancha,
  id,
  nombre,
  url_imagen,
  jugadores,
  techo,
  horarios,
}) => {
  const [horarioActivo, setHorarioActivo] = useState("");
  const { reservas, agregarReserva } = useContext(CanchasContext);

  const handleSubmit = () => {
    if (horarioActivo === "") return errorAlert();
    const reserva = {
      horario: horarioActivo,
      idReserva: new Date().getTime(),
      ...cancha,
    };
    agregarReserva(reserva);
    addAlert();
    setHorarioActivo("");
  };

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
          <div className="d-flex flex-wrap">
            {horarios.map((horario) => (
              <div key={horario.id}>
                <button
                  onClick={() => setHorarioActivo(horario)}
                  className={`mt-3 ms-3 btn ${
                    horarioActivo.hora === horario.hora
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  disabled={reservas.find(
                    (reserva) =>
                      reserva.horario.id === horario.id && reserva.id === id
                  )}
                >
                  {horario.hora}
                </button>
              </div>
            ))}
          </div>
          <div className="p-3">
            <button onClick={handleSubmit} className="btn btn-success">
              Reservar
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cancha;
