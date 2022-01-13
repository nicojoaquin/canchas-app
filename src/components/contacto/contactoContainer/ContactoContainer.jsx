import HeaderContacto from "../headerContacto";
import Form from "../form";
import Map from "../map";

const ContactoContainer = () => {
  return (
    <section className="mt-5">
      <HeaderContacto />
      <div className="container-fluid p-5 row">
        <Form />
        <Map />
      </div>
    </section>
  );
};

export default ContactoContainer;
