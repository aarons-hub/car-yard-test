import React from "react";
import { useState, useEffect } from "react";

function Carslist() {
  const [items, setItems] = useState([]);
  const [button, setButton] = useState(false);
  const [buttontwo, setButtonTwo] = useState(true);
  const [filter, setFilter] = useState([]);

  function fetchData() {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((e) => {
        console.log("error", e);
      });
    console.log("data fetched");
  }

  useEffect(() => {
    fetchData();
  }, []);

  function resetButton() {
    setButton(false);
    setButtonTwo(true);
  }

  const pricedata = [
    { label: "$500", value: "500" },
    { label: "$3000", value: "3000" },
    { label: "$5000", value: "5000" },
    { label: "$4000", value: "4000" },
    { label: "$7500", value: "7500" },
    { label: "$10000", value: "10000" },
    { label: "$20000", value: "20000" },
  ];

  console.log(items);

  function handleFilter(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target[0].value);
    console.log(event.target[1].value);

    let minprice = event.target[0].value;
    let maxprice = event.target[1].value;

    const result = items.filter(
      (i) =>
        i.acf.price >= parseInt(minprice) && i.acf.price <= parseInt(maxprice)
    );

    setItems(result);
    setButton(true);
    setButtonTwo(false);
  }

  return (
    <div>
      <h1>Carslist</h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <form onSubmit={handleFilter} style={{ display: "flex", gap: "15px" }}>
          <select>
            <option disabled={true} value="">
              --Choose and option--
            </option>
            {pricedata.map((i) => {
              return (
                <option key={i.label} value={i.value}>
                  {i.label}
                </option>
              );
            })}
          </select>
          <select>
            <option disabled={true} value="">
              --Choose and option--
            </option>
            {pricedata.map((i) => {
              return (
                <option key={i.label} value={i.value}>
                  {i.label}
                </option>
              );
            })}
          </select>
          <input disabled={button} type="submit" value="Go" />
        </form>
        <button
          disabled={buttontwo}
          onClick={() => (fetchData(), resetButton())}
        >
          Reset
        </button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.title.rendered} - ${item.acf.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Carslist;
