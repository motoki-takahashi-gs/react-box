import React from 'react';
import boxes from './data/boxes';
import Box from './components/Box';
import './App.css';

function App() {
  const [squares, setSquares] = React.useState(boxes)

  const toggle = (id) => {
    setSquares(prevSquares => {
      const newSquares = []
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i]
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on
          }
          newSquares.push(updatedSquare)
        } else {
          newSquares.push(currentSquare)
        }
      }
      return newSquares
    })
  }

  const squareElements = squares.map(square => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={toggle}
    />
  ))

  return (
    <div className="App">
      {squareElements}
    </div>
  );
}

export default App;
