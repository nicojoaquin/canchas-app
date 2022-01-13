const Form = () => {
  return (
    <form className="col-md-6 mt-5 pt-5">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Mensaje
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button type="submit" className="btn btn-success w-100 mt-3">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
