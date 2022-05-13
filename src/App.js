import { useMemo, useState } from 'react';
import Map from './components/Map';
// import url from 

function App() {
  // const [stations, setStations] = useState([
  //   { id: 1, nameStation: 'Текстильщики', coors: [55.7092094, 37.7332191], isDone: false},
  //   { id: 2, nameStation: 'Кузьминки', coors: [55.7055473, 37.7662201], isDone: true},
  // ])

  const url = "http://localhost:3001/stations";

  function returnStation() {
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        return jsonData
      })
  }


  return (
    <div className="App">
      <Map stations={returnStation()} />
    </div>
  );
}

export default App;
