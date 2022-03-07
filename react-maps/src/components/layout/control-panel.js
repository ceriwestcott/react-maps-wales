import { Button } from "bootstrap";
import React from "react";
import { town_names } from "../../constants/constants";
import { getNextCounty, getPreviousCounty } from "../../services/utility";

function ControlPanel({ setArea, area }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          const nextArea = getNextCounty(area);
          setArea(nextArea);
        }}
      >
        Next County
      </button>
      <button
        type="button"
        onClick={() => {
          const previousCounty = getPreviousCounty(area);
          setArea(previousCounty);
        }}
      >
        previous County
      </button>
    </div>
  );
}

export default ControlPanel;
