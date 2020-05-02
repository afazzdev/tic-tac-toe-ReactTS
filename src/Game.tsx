/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './Game.css';
import Board from './Board';
import useCalculateWinner from './useCalculateWinner';

type TSquare = { squares: string[] };
type THistory = TSquare[];

function Game() {
  const [history, setHistory] = useState<THistory>([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  let historyCopy: THistory = [...history];
  let current: TSquare = historyCopy[historyCopy.length - 1];
  const winner = useCalculateWinner(current.squares);

  useEffect(() => {
    historyCopy = [...history];
    current = historyCopy[historyCopy.length - 1];
  }, [history]);

  const handleClick = (i: number): void => {
    const squaresCopy = current.squares.slice();

    if (winner || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setHistory([...history, { squares: squaresCopy }]);
    setXIsNext(!xIsNext);
  };

  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board current={current.squares} setHistory={handleClick} />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;
