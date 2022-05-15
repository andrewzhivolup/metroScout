import React, { useEffect, useMemo, useState } from "react";
import { MapContainer, SVGOverlay, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";
import CustomMarker from "./Map/CustomMarker";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as MetroMap } from "../img/metro-map.svg";
import Markers from "./Map/Markers";

const Map = () => {
  // const centerPosition = [55.7522, 37.6156]; //позиция центра
  const centerPosition = [55.7092094, 37.7332191];
  const zoom = 13; //первоначальный зум
  const bounds = [
    [55.51405, 36.979854],
    [56.010436, 38.276633],
  ];

  return (
    <MapContainer
      className="leaflet-container"
      center={centerPosition}
      zoom={zoom}
      scrollWheelZoom={true}
      attributionControl={false} //убирает атрибуты (флаг)
      maxBounds={bounds}
      maxZoom={14}
      minZoom={10}
    >
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <SVGOverlay bounds={bounds}>
        <MetroMap />
      </SVGOverlay>
      <Markers/>
    </MapContainer>
  );
};

export default Map;
