import useFetch from "../../../hooks/useFetch";
import Card from "../card";

const CardContainer = () => {
  const { data: deportes } = useFetch("https://apipdtc.herokuapp.com/deportes");

  return (
    <section className="mt-5">
      <h2 className="text-center">Nuestras canchas</h2>
      <div className="d-flex justify-content-center flex-wrap">
        {deportes.map((deporte) => (
          <Card key={deporte.id} {...deporte} />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
