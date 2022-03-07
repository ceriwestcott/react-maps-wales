import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import { Row, Col } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import StatsContainer from "./components/display-components/statsContainer";
import CountyContainers from "./components/layout/county-containers";
import ControlPanel from "./components/layout/control-panel";
import SplitScreen from "./components/display-components/split-screen";
import InfoContainer2 from "./components/layout/cards/info-container-2";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

function App() {
  const [area, setArea] = useState({});
  const [selected, setSelected] = useState(false);
  const [filter, setFilter] = useState("");

  const toggleFilter = (state = null) => {
    debugger;
    if (state && state !== filter) {
      setFilter(state);
    } else {
      setFilter("");
    }
  };
  useEffect(() => {}, [area]);

  return (
    <div>
      <Container fluid>
        <SplitScreen>
          <div>
            <ControlPanel
              setArea={setArea}
              area={area}
              setFilter={toggleFilter}
            />
            <Map
              setArea={setArea}
              setSelected={setSelected}
              area={area}
              selected={selected}
              filter={filter}
            />
            <ReactTooltip>{area.name}</ReactTooltip>
          </div>
          {filter ? (
            <StatsContainer filter={filter} />
          ) : (
            <InfoContainer2
              area={area.name}
              areaWelsh={area.welsh_name}
              image={area.image_url}
              population={area.population}
              summary={area.summary}
            ></InfoContainer2>
          )}
        </SplitScreen>
      </Container>
    </div>
  );
}

export default App;
