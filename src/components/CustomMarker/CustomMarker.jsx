import React from "react";
import L from "leaflet";
import CustomMarkerSvg from "../../../src/img/pin-false.svg";
import { Marker, Popup } from "react-leaflet";
import UploadForm from "../UI/UploadForm/UploadForm";

const CustomMarker = (props) => {
  const SwapDefaultPin = new L.Icon({
    iconUrl: CustomMarkerSvg,
    iconSize: [85, 85],
  });

  

  const position = [55.7522, 37.6156];

  return (
    <Marker
      id={props.marker.id}
      position={props.marker.coors}
      icon={SwapDefaultPin}
    >
      <Popup>
        {props.marker.nameStation}
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
