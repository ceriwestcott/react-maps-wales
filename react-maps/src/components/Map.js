import { useState, useEffect, Fragment } from "react";
import {
  geo_url,
  mapStyleConfig,
  POPULATION,
  town_names,
} from "../constants/constants";
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

const colorScale = scaleLinear().domain(55000, 400000).range([]);

const Map = ({ setArea, filter }) => {
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

  const handleChange = (townName) => {
    switch (filter) {
      case POPULATION:
        return colorScale(
          town_names.find((x) => x.name === townName).population
        );
      default:
        return "";
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {}, [filter]);

  return (
    <div className="App">
      <div style={{ width: "50wh", height: "50wh" }}>
        <ComposableMap
          width={900}
          height={1080}
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 2000,
          }}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
          >
            <Geographies geography={geo_url}>
              {({ geographies }) =>
                geographies.map((geo, index) => {
                  return (
                    <Fragment key={index * 1000}>
                      <Geography
                        key={index}
                        geography={geo}
                        onClick={() => {
                          const { LAD13NM } = geo.properties;
                          setArea(town_names.find((x) => x.name === LAD13NM));
                        }}
                        style={mapStyleConfig}
                        fill={
                          filter
                            ? colorScale(
                                town_names.find(
                                  (x) => x.name === geo.properties.LAD13NM
                                ).population
                              )
                            : "#000"
                        }
                      />
                    </Fragment>
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default memo(Map);
