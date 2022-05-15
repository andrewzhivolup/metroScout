import { useDispatch, useSelector } from "react-redux";
import Map from "./components/Map";
import { Spin } from "antd";
import { useEffect } from "react";
import { fetchStations } from "./asyncActions/stations";

function App() {
  const loadingStatus = useSelector((state) => state.spin.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStations());
  }, []);

  return (
    <div className="App">
      <h1 className="App__title">Metro Scout</h1>
      <div className="App__content">
        {loadingStatus ? (
          <div className="App__spin">
            <Spin size="large" />
          </div>
        ) : (
          <>
            <div className="App_map">
              <Map />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
