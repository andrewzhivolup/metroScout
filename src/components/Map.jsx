import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../App.css';
import { MarkerCustom } from "./UI/Marker-true/MarkerCustom";
import UploadForm from "./UI/UploadForm/UploadForm";
import CustomMarker from "./CustomMarker/CustomMarker";

const Map = () => {
  const [stations, setStations] = useState([
    { id: 1, title: 'Текстильщики', coors: [55.7092094, 37.7332191] },
    { id: 2, title: 'Кузьминки', coors: [55.7055473, 37.7662201] },

    
  ])
  const centerPosition = [55.7522, 37.6156]; //позиция центра 
  const zoom = 13; //первоначальный зум

  return (
    <MapContainer 
      className="leaflet-container" 
      center={centerPosition} 
      zoom={zoom} 
      scrollWheelZoom={true} 
      attributionControl = {true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.map( station =>
      <CustomMarker marker = {station} key={station.id}/>  
        )}
    </MapContainer>
  );
};

export default Map;