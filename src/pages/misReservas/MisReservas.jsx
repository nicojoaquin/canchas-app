import { useContext } from "react";
import { CanchasContext } from "../../context/CanchasContext";

const MisReservas = () => {
  const { reservas, eliminarReserva } = useContext(CanchasContext);

  if (reservas.length === 0) {
    return (
      <div
        className="text-secondary d-flex align-items-center justify-content-center"
        style={{ height: "700px" }}
      >
        <h2>No hay reservas...</h2>
      </div>
    );
  }

  return (
    <table className="table" style={{ height: "700px" }}>
      <thead>
        <tr>
          <th scope="col">Cancha</th>
          <th scope="col">Horario</th>
          <th scope="col">Jugadores</th>
          <th>Opción</th>
        </tr>
      </thead>
      <tbody>
        {reservas.map((reserva) => (
          <tr key={reserva.idReserva}>
            <td>{reserva.nombre}</td>
            <td>{reserva.horario.hora}</td>
            <td>{reserva.jugadores ?? "n/a"}</td>
            <td>
              <i
                className="bi bi-file-x-fill"
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
                onClick={() => eliminarReserva(reserva.idReserva)}
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MisReservas;
