import React from 'react';
import Box from './components/Box';
import boxes from './data/boxes';
import './App.css';

function App() {
  const [squares, setSquares] = React.useState(boxes)

  const squareElements = squares.map(square => (
    <Box key={square.id} on={square.on} />
  ))

  return (
    <div className="App">
      {squareElements}
    </div>
  );
}

export default App;
