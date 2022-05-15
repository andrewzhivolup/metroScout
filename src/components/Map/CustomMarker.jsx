import React, { useEffect, useState } from "react";
import L from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";
import CustomMarkerSvgFalse from "../../../src/img/pin-false.svg";
import CustomMarkerSvgTrue from "../../../src/img/pin-true.svg";

const CustomMarker = (props) => {
  
  const [sizeMarker, setSizeMarker] = useState(75)
  const SwapDefaultPin = new L.Icon({
    iconUrl: props.marker.isDone ? CustomMarkerSvgTrue : CustomMarkerSvgFalse,
    iconSize: [sizeMarker, sizeMarker],
  });

  

  return (
    <Marker
      id={props.marker.id}
      position={props.marker.coors}
      icon={SwapDefaultPin}
    >
      <Popup>
        {props.marker.nameStation}
        <br />
        <img
          width={100}
          src={props.marker.img}
          alt="альтернативный текст"
        ></img>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
