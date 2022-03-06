import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import { Row, Col } from "react-bootstrap";
import ReactTooltip from "react-tooltip";

import InfoContainer from "./components/layout/info-container";
import Controls from "./components/layout/controls";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

function App() {
  const [area, setArea] = useState({});
  const [filter, setFilter] = useState("");

  useEffect(() => {}, [area]);

  return (
    <div>
      <Container fluid>
        <Row>
          <Controls setFilter={setFilter} />
          <Col>
            <Map setArea={setArea} filter={filter} />
          </Col>
          <Col>
            <InfoContainer
              area={area.name}
              areaWelsh={area.welsh_name}
              image={area.image}
              population={area.population}
            ></InfoContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;