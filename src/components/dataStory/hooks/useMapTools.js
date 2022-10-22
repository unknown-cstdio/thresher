import * as d3 from "d3";
//import * as d3 from "https://cdn.skypack.dev/d3@7";
import { useState, useEffect } from "react";

export const useMapTools = function () {
  // store loaded map data in a state
  const [mapData, setMapData] = useState({
    data: {},
    loading: true,
  });
  const [dataFile20, setdataFile20] = useState({
    data: {},
    loading: true,
  });

  const [dataFile15, setdataFile15] = useState({
    data: {},
    loading: true,
  });
  const rootpath = window.location.protocol + "//" + window.location.hostname;
  const midpath = "/.netlify/functions/index"
  console.log(process.env.REACT_APP_API_URL + "/map")
  // only fetch map data once and create a tooltip
  useEffect(() => {
    d3.json(process.env.REACT_APP_API_URL + "/map")
      .then((data) => {
        setMapData((prevState) => {
          return { ...prevState, data: data, loading: false };
        });
      })
      .catch((err) => {
        console.log("error occurred with loading map", err);
      });

    d3.json(process.env.REACT_APP_API_URL + "/data2020")
      .then((data) => {
        setdataFile20((prevState)=>{
          return { ...prevState, data: data, loading: false };
        })
      })
      .catch((err) => {
        console.log("error occurred with loading bach data", err);
      })

      d3.json(process.env.REACT_APP_API_URL + "/data2015")
      .then((data) => {
        setdataFile15((prevState)=>{
          return { ...prevState, data: data, loading: false };
        })
      })
      .catch((err) => {
        console.log("error occurred with loading bach data", err);
      })

    /// tooltip creation
    d3.select("body")
      .append("div")
      .attr("id", "tooltip")
      .attr("style", "position: absolute; opacity: 0")
    ///
  }, []);

  return { mapData, dataFile20, dataFile15};
};