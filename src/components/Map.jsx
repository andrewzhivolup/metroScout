import React, { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  SVGOverlay,
  TileLayer,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";
import UploadForm from "./UI/UploadForm/UploadForm";
import CustomMarker from "./CustomMarker/CustomMarker";
import { useDispatch, useSelector } from "react-redux";
import { fetchStations } from "../asyncActions/stations";
import { ReactComponent as MetroMap } from "../img/metro-map.svg";

const Map = () => {
  // const centerPosition = [55.7522, 37.6156]; //позиция центра
  const centerPosition = [55.7092094, 37.7332191];
  const zoom = 13; //первоначальный зум
  const bounds = [
    [55.51405, 36.979854],
    [56.010436, 38.276633],
  ];
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
      {stationsList}
    </MapContainer>
  );
};

export default Map;
