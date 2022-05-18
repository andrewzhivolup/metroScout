import { MapContainer, SVGOverlay, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";
import { ReactComponent as MetroMap } from "../img/metro-map.svg";
import Markers from "./Map/Markers";

const Map = () => {
  const centerPosition = [55.794381694500615, 37.69666671752925]; //позиция центра
  const zoom = 11; //первоначальный зум
  const tempCenterPosition = [55.71976258415723, 37.86163330078126]; //временный центр
  const tempZoom = 13; //временный зум
  const bounds = [
    [55.51405, 36.979854],
    [56.010436, 38.276633],
  ];

  return (
    <MapContainer
      className="leaflet-container"
      center={tempCenterPosition} 
      zoom={tempZoom}
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
        <MetroMap/>
      </SVGOverlay>
      <Markers/>
    </MapContainer>
  );
};

export default Map;
