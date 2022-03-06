import { Button } from "bootstrap";
import React from "react";

function Controls({ setFilter }) {
  return (
    <div>
      <button type="button" onClick={() => setFilter("POPULATION")}>
        Population
      </button>
    </div>
  );
}

export default Controls;
