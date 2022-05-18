import React, { useEffect, useState } from "react";
import { Circle, Marker, Popup, useMap } from "react-leaflet";

const CustomMarker = ({ marker }) => {
  const falseCircle = { //цвета маркера если станция посещена 
    color: "#BA0F08",
    fillColor: "#E32636",
  };
  const trueCircle = { //цвета маркера если станция непосещена 
    color: "#306934",
    fillColor: "#44944A",
  };
  return (
    <Circle
      id={marker.id}
      center={marker.coors}
      radius={190}
      pathOptions={marker.isDone?trueCircle:falseCircle}
      opacity={1}
      fillOpacity={1}
    >
      <Popup>
        {marker.nameStation}
        <br />
        <img width={100} src={marker.img} alt="альтернативный текст"></img>
      </Popup>
    </Circle>
  );
};

export default CustomMarker;
