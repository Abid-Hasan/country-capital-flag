import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>
        Capital:{" "}
        <strong>{country.capital ? country.capital[0] : "Unknown"}</strong>
      </p>
      <img src={country.flags.png} alt="" />
    </div>
  );
};

export default Country;
