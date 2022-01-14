import { createContext, useEffect, useState } from "react";

export const CanchasContext = createContext();

const CanchasProvider = ({ children }) => {
  const [reservas, setReservas] = useState(
    JSON.parse(localStorage.getItem("reservas")) ?? []
  );

  //Guarda la reserva en localStorage
  useEffect(() => {
    localStorage.setItem("reservas", JSON.stringify(reservas));
  }, [reservas]);

  //Agrega la reserva
  const agregarReserva = (cancha) => {
    setReservas([cancha, ...reservas]);
  };

  //Eliminar la reserva
  const eliminarReserva = (id) => {
    setReservas(reservas.filter((reserva) => reserva.idReserva !== id));
  };

  return (
    <CanchasContext.Provider
      value={{ reservas, agregarReserva, eliminarReserva }}
    >
      {children}
    </CanchasContext.Provider>
  );
};

export default CanchasProvider;
