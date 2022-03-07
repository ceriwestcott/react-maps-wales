import React from "react";
import "../styles.css";

import { FaChild } from "react-icons/fa";

function InfoContainer2({
  area = "Click a County",
  areaWelsh,
  image,
  population,
  summary,
}) {
  return (
    <div class="box red">
      <h2>{area}</h2>
      <p>{areaWelsh}</p>
      <hr />
      <img src={image} className="max-width" />
      <br />
      <p>
        <FaChild />
        {population}
      </p>
      <p>{summary}</p>
    </div>
  );
}

export default InfoContainer2;
