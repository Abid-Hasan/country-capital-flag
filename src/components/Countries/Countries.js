import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  const performSearch = () => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common
          .concat(country.capital ? country.capital[0] : "Unknown")
          .toLowerCase()
          .includes(searchText.toLowerCase())
      )
    );
  };

  useEffect(performSearch, [searchText, countries]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="countries-container">
      <h1>Countries</h1>
      <div className="search-container">
        <input
          style={{
            width: "50%",
            marginRight: "5px",
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
          }}
          type="text"
          name=""
          id=""
          placeholder="Search for a country or capital"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            color: "dimgray",
            fontWeight: "bold",
          }}
          onClick={performSearch}
        >
          Search
        </button>
      </div>
      <div className="countries-grid">
        {filteredCountries.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
