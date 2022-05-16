import React, { useEffect, useMemo, useState } from "react";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import CustomMarker from "./CustomMarker";
import L from "leaflet";
import "leaflet-path-transform";

const Markers = () => {
  const map = useMap();
  const stations = useSelector((state) => {
    return state.stations.stations;
  });

  const stationsList = useMemo(() => {
    if (stations.length) {
      return stations.map((station) => (
        <CustomMarker marker={station} key={station.id} />
      ));
    }
    return <></>;
  }, [stations]);

  // useEffect(() => {
  //   map.on("click", onMapClick);
  //   map.on("zoomend", onZoomEnd);
  //   return () => {
  //     map.off("click", onMapClick);
  //     map.off("zoomend", onZoomEnd);
  //   };
  // }, []);

  // const onMapClick = (e) => {
  //   console.log(e);
  // };

  // const onZoomEnd = (e) => {
  //   console.log(e.target.getZoom());
  // };

  useEffect(() => {
    let coordinates = [55.719424179106, 37.887554168701136]; // координаты заполни
    const radius = 190;
    const polygon = new L.circle(coordinates, radius, {
      color: "#BA0F08",
      draggable: true,
      transform: true,
    }).addTo(map);

    // polygon.on("dragstart", (e) => {
    //   console.log(e);
    // });

    // polygon.on("drag", (e) => {
    //   console.log(e);
    // });

    polygon.on("dragend", (e) => {
      console.log(e.target.getLatLng());
    });
  }, []);

  return stationsList;
};

export default Markers;
