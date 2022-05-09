import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";
import UploadForm from "./UI/UploadForm/UploadForm";
import CustomMarker from "./CustomMarker/CustomMarker";

const Map = ({stations}) => {
  // const [stations, setStations] = useState([
  //   { id: 1, nameStation: 'Текстильщики', coors: [55.7092094, 37.7332191], isDone: false},
  //   { id: 2, nameStation: 'Кузьминки', coors: [55.7055473, 37.7662201], isDone: true},
  // ])
  // const centerPosition = [55.7522, 37.6156]; //позиция центра
  const centerPosition = [55.7092094, 37.7332191];
  const zoom = 13; //первоначальный зум

  return (
    <div>
      <button onClick={console.log('')}>test</button>
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
        {stations.map( station =>
      <CustomMarker marker = {station} key={station.id}/>  
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
