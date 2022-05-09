import React, { useState } from "react";
import L from "leaflet";
import { Marker, Popup, SVGOverlay } from "react-leaflet";
import UploadForm from "../UI/UploadForm/UploadForm";
import { Switch } from 'antd';
import 'antd/dist/antd.css';

import CustomMarkerSvgFalse from "../../../src/img/pin-false.svg";
import CustomMarkerSvgTrue from "../../../src/img/pin-true.svg";
import metroMapLeb from '../../../src/img/metro-map.svg';

const CustomMarker = (props) => {
  const SwapDefaultPin = new L.Icon({
    iconUrl: (props.marker.isDone ? CustomMarkerSvgTrue : CustomMarkerSvgFalse),
    iconSize: [85, 85],
  });

  function onChange(checked) {
    console.log(`switch to ${checked}`);

  }
  
  return (
    <Marker
      id={props.marker.id}
      position={props.marker.coors}
      icon={SwapDefaultPin}
    >
      <Popup>
        {props.marker.nameStation}
        <br/>
        <Switch defaultChecked={props.marker.isDone} onChange={onChange} />
        
      </Popup>
    
    </Marker>
  );
};

export default CustomMarker;
