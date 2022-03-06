import React from "react";
import Card from "react-bootstrap/Card";
import "./styles.css";
function InfoContainer({
  area = "Click a County",
  areaWelsh,
  image,
  population,
}) {
  return (
    <section class="page-contain">
      <a href="#" class="data-card">
        <h3>{area}</h3>
        <hr></hr>
        <h4>{areaWelsh ? `${areaWelsh}(welsh)` : ""}</h4>
        <h4>{population ? population.toLocaleString() : ""}</h4>
        <img src={image} />
        <p>Aenean lacinia bibendum nulla sed consectetur.</p>
      </a>
    </section>
  );
}

export default InfoContainer;
