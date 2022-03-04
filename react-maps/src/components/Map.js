import { useState, useEffect } from "react";
import { geo_url } from "../constants/constants";
import { scaleLinear } from "d3-scale";
import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";
import { geo_json } from "../constants/geo";

const colorScale = scaleLinear().domain(0, 6300000).range([]);

const Map = ({ scale }) => {
  const [countries, setCountries] = useState([]);
  const [position, setPosition] = useState({
    coordinates: [-3.876032031877137, 52.38843330233102],
    zoom: 4,
  });

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  const getData = () => {
    // fetch("http://localhost:3000/countries", {
    //   header: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => setCountries(res));

    setCountries(JSON.stringify(geo_json));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {JSON.stringify(position)}
      <div style={{ width: "100vw", height: "100vh" }}>
        <ComposableMap
          width={900}
          height={400}
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: scale,
          }}
        >
          {countries.length > 0 ? (
            <ZoomableGroup
              zoom={position.zoom}
              center={position.coordinates}
              onMoveEnd={handleMoveEnd}
            >
              <Geographies geography={geo_url}>
                {({ geographies }) =>
                  geographies.map((geo, index) => {
                    return (
                      <>
                        <Geography key={index} geography={geo} />
                        <Annotation subject={[]}></Annotation>
                      </>
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          ) : (
            <p>Loading...</p>
          )}
        </ComposableMap>
      </div>
    </div>
  );
};

export default memo(Map);
