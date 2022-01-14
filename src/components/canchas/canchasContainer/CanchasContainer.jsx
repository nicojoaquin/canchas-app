import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Spinner from "../../spinner/Spinner";
import Cancha from "../cancha";

const CanchasContainer = () => {
  const { deporte } = useParams();
  const { data: canchas, loading } = useFetch(
    `https://apipdtc.herokuapp.com/${deporte}`
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="container mt-5">
      <h1 className="text-center">Canchas de {deporte}</h1>
      <div className="mt-4">
        {canchas.map((cancha) => (
          <Cancha key={cancha.id} {...cancha} cancha={cancha} />
        ))}
      </div>
    </section>
  );
};

export default CanchasContainer;
