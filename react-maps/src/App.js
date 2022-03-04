import Container from "react-bootstrap/Container";
import { useState } from "react";
import Map from "./components/Map";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

function App() {
  const [toolTipContent, setToolTipContent] = useState("");
  return (
    <div>
      <Container fluid>
        <Map />
      </Container>
    </div>
  );
}

export default App;
