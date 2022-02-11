import React from 'react';
import boxes from './data/boxes';
import Box from './components/Box';
import './App.css';

function App() {
  const [squares, setSquares] = React.useState(boxes)

  const toggle = (id) => {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square
      })
    })
  }

  const squareElements = squares.map(square => (
    <Box
      key={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
    />
  ))

  return (
    <div className="App">
      {squareElements}
    </div>
  );
}

export default App;
