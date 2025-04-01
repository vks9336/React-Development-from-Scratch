import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("EUR");
  const [convertedCurrency, setConvertedCurrency] = useState(null);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCurrency() {
        try {
          setError("");
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${firstCurrency}&to=${secondCurrency}`,
            { signal: controller.signal }
          );

          const data = await res.json();

          if (amount < 1) {
            setConvertedCurrency(null);
            return;
          }

          setConvertedCurrency(Number(data.rates[secondCurrency]));
          setError("");
          console.log(data);
        } catch (err) {
          setError(err.message);
          console.log(err);
        } finally {
          setError("");
        }
      }

      if (firstCurrency === secondCurrency) {
        setConvertedCurrency(amount);
        return;
      }

      fetchCurrency();

      return function () {
        controller.abort();
      };
    },
    [amount, firstCurrency, secondCurrency]
  );

  return (
    <div className="main">
      <input
        className="amount"
        value={amount}
        type="Number"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        className="first-currency"
        value={firstCurrency}
        onChange={(e) => setFirstCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        className="second-currency"
        value={secondCurrency}
        onChange={(e) => setSecondCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {error ? (
        <Error error={error} />
      ) : (
        <Result currency={convertedCurrency} second={secondCurrency} />
      )}
    </div>
  );
}

function Result({ currency, second }) {
  return (
    <p className="result">
      {currency} {second}
    </p>
  );
}

function Error({ error }) {
  return <p>{error}</p>;
}
