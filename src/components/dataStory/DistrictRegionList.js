import * as d3 from "d3";
import { setMapProjection } from "./helpers/setMapProjection";
import { setMapProjectionSm } from "./helpers/setMapProjectionSm";
import { useMapTools } from "./hooks/useMapTools";
import DistrictRegion from "./DistrictRegion";
import "../../stylings/styleJP.css";
import React, {useEffect} from "react";

export default function DistrictRegionList(props) {
  // step 1: load geoJSON and create tooltip
  const {mapData, dataFile20, dataFile15} = useMapTools();
  const mapZoom =String("mapzoom" + props.id);

  // render map only when map data is fully loaded
  if (!mapData.loading && ! dataFile20.loading && !dataFile15.loading) {
    // step 2: render the regions
    // compute a path function based on correct projections that we will use later
    let path;
    if (props.small){
      path = d3.geoPath().projection(setMapProjectionSm(mapData.data));
    } else {
      path = d3.geoPath().projection(setMapProjection(mapData.data));
    }
    
    // for each geoJSON coordinate, compute and pass in the equivalent svg path
    const districtRegions = mapData.data.features.map((data) => {
      const region_name = data.properties["NAMELSAD"];
      const GEOID = data.properties['GEOID'];
      let bach
      let white;
      let income;
      let gross;
      let value;
      if (props.year == 20){
        if(dataFile20.data[GEOID] != undefined){
          bach = dataFile20.data[GEOID]['bach_per20'];
          white = dataFile20.data[GEOID]['white_per20'];
          income = dataFile20.data[GEOID]['income20'];
          gross = dataFile20.data[GEOID]['gross20'];
          value = dataFile20.data[GEOID]['value20'];
        } 
      } else {
        if(dataFile15.data[GEOID]!=undefined){
          bach = dataFile15.data[GEOID]['bach_per15'];
          white = dataFile15.data[GEOID]['white_per15'];
          income = dataFile15.data[GEOID]['income15'];
          gross = dataFile15.data[GEOID]['gross15'];
          value = dataFile15.data[GEOID]['value15'];
        }
      }
      
      return (
        <DistrictRegion
          key={data.properties.GEOID}
          path={path(data)}
          tooltipData={region_name}
          bach={bach}
          white={white}
          income={income}
          gross={gross}
          value={value}
          statNum={props.statNum}
        />
      );
    });

   var svg = d3.select(`${"#" + mapZoom}`).call(d3.zoom()
    .on("zoom", function () {
      svg.attr("transform", d3.event.transform)
   }));

    return (
      <div style={{overflow: "hidden", width: "100%", height: "100%"}}>
        <svg className="map-canvas d-flex justify-content-center" id={mapZoom}>
          <g>{districtRegions}</g>
        </svg>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}