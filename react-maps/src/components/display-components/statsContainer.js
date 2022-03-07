import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { town_names } from "../../constants/constants";

function StatsContainer({ filter }) {
  return (
    <ListGroup variant="flush">
      {town_names
        .sort((x, y) => y.population - x.population)
        .map((town, index) => {
          return (
            <ListGroupItem key={index}>
              {town.name} - {town.population}
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
}

export default StatsContainer;
