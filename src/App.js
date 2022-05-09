import { useMemo, useState } from 'react';
import Map from './components/Map';

function App() {
  const [stations, setStations] = useState([
    { id: 1, nameStation: 'Текстильщики', coors: [55.7092094, 37.7332191], isDone: false},
    { id: 2, nameStation: 'Кузьминки', coors: [55.7055473, 37.7662201], isDone: true},
  ])

  return (
    <div className="App">
      <Map stations = {stations}/>
    </div>
  );
}

export default App;
