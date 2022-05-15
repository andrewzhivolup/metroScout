import React, { useEffect, useMemo } from "react";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import CustomMarker from "./CustomMarker";

const Markers = () => {
  const map = useMap();
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

  useEffect(() => {
    map.on("click", onMapClick);
    map.on("zoomend", onZoomEnd);
    return () => {
      map.off("click", onMapClick);
      map.off("zoomend", onZoomEnd);
    };
  }, []);

  const onMapClick = (e) => {
    console.log(e);
  };

  const onZoomEnd = (e) => {
    console.log(e.target.getZoom());
  };
  return stationsList;
};

export default Markers;
