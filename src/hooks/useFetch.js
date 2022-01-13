import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (api) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [api]);

  const getData = async () => {
    const res = await axios.get(api);
    setData(res.data);
  };

  return {
    data,
  };
};

export default useFetch;
