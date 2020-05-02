import React, { useState } from 'react';
import './Game.css';
import Board from './Board';

export type TSquare = string[];

function Game() {
  const [squares, setSquare] = useState<TSquare>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          squares={squares}
          xIsNext={xIsNext}
          setSquare={setSquare}
          setXIsNext={setXIsNext}
        />
      </div>
      <div className='game-info'>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;
