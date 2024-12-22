import { useState, useEffect } from "react";
const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
//   let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err)=> console.log(err))
  }, [currency]);
  return data;
};

export default useCurrencyInfo;
