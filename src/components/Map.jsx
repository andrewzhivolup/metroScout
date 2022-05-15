import React, { useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";
import UploadForm from "./UI/UploadForm/UploadForm";
import CustomMarker from "./CustomMarker/CustomMarker";
import { useDispatch, useSelector } from "react-redux";
import { fetchStations } from "../asyncActions/stations";

const Map = () => {
  // const centerPosition = [55.7522, 37.6156]; //позиция центра
  const centerPosition = [55.7092094, 37.7332191];
  const zoom = 13; //первоначальный зум
  const dispatch = useDispatch();
  const stations = useSelector((state) => {
    console.log(state.stations.stations);
    return state.stations.stations;
  });

  useEffect(() => {
    dispatch(fetchStations());
  }, []);

  const stationsList = useMemo(() => {
    if (stations.length) {
      return stations.map((station) => (
        <CustomMarker marker={station} key={station.id} />
      ));
    }
    return <></>;
  }, [stations]);

  return (
    <div>
      <MapContainer
        className="leaflet-container"
        center={centerPosition}
        zoom={zoom}
        scrollWheelZoom={true}
        attributionControl={false} //убирает атрибуты (флаг)
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stationsList}
      </MapContainer>
    </div>
  );
};

export default Map;
