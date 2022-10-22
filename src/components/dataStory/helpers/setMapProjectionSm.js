import * as d3 from "d3";
import { useEffect } from "react";

export const setMapProjectionSm = function(mapData) {
  // use the geoAlbers map projection
  const projection = d3.geoAlbers();
  // adjust projection to fit area of map canvas
  projection
    .precision(0)
    // .rotate([90, 0, 0])
    .fitExtent(
      [
        [0, 0],
        [360, 300],
      ],
      mapData
    );
  return projection;
};