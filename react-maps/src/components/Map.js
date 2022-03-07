import { useState, useEffect, Fragment } from "react";
import { scaleQuantize, scaleLinear } from "d3-scale";

import {
  geo_url,
  mapStyleConfig,
  POPULATION,
  town_names,
} from "../constants/constants";
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

const Map = ({ setArea, filter, setSelected, selected, area }) => {
  const [countries, setCountries] = useState([]);
  const [style, setStyle] = useState({});
  const [position, setPosition] = useState({
    coordinates: [-3.876032031877137, 52.38843330233102],
    zoom: 4,
  });

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  const colorScale = scaleLinear()
    .domain([0.29, 350000])
    .range(["#ffedea", "#ff5233"]);

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

  useEffect(() => {}, [filter]);

  return (
    <div className="App">
      <div style={{ width: "50wh", height: "50wh" }}>
        <ComposableMap
          width={900}
          height={1080}
          data-tip=""
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 4000,
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
                        data-tip={geo.properties.LAD13NM}
                        key={index}
                        geography={geo}
                        onClick={() => {
                          const { LAD13NM } = geo.properties;
                          if (selected && LAD13NM === area.name) {
                            setSelected(false);
                            setStyle(mapStyleConfig.default);
                          } else {
                            setSelected(true);
                            setArea(town_names.find((x) => x.name === LAD13NM));
                            setStyle(mapStyleConfig.hover);
                          }
                        }}
                        // onMouseEnter={() => {
                        //   const { LAD13NM } = geo.properties;
                        //   if (!selected)
                        //     setArea(town_names.find((x) => x.name === LAD13NM));
                        // }}
                        fill={colorScale(area.population)}
                      />
                    </Fragment>
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
      {JSON.stringify(
        selected ? mapStyleConfig.hover.fill : mapStyleConfig.default.fill
      )}
    </div>
  );
};

export default memo(Map);
