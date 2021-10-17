import React, {useState} from 'react';
import './App.css';
import Boxgen from './components/boxgen';
import Display from './components/display';

function App() {

  const [boxes, setBoxes] = useState([])

  return (
    <div className="App">
      <Boxgen setBoxes = {setBoxes} boxes = {boxes}/>
      <Display boxes = {boxes} />
    </div>
  );
}

export default App;
