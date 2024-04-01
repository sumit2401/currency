import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const CurrencyContext = createContext(null);

const CurrencyContextProvider = (props) => {
  const [currencyDetail, setCurrencyDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.1eor.com/api/v1/costcalculator/upsert-costcalculator-key",
          {
            params: {
              key: "djfhdasif8sd7fyhsidf8as7dfsd",
            },
          }
        );
        setCurrencyDetail(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currencyDetail, loading, error }}>
      {props.children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
