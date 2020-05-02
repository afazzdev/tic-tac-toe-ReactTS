import React, { useState } from 'react';
import Square from './Square';
import useCalculateWinner from './useCalculateWinner';

type IBoard = {
  i: number;
};

export type TSquare = string[];

function Board() {
  const [square, setSquare] = useState<TSquare>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const winner = useCalculateWinner(square);
  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const handleClick = (i: number): void => {
    const squares = square.slice();
    squares[i] = xIsNext ? 'X' : 'O';
    setSquare(squares);
    setXIsNext(!xIsNext);
  };

  function RenderSquare({ i }: IBoard) {
    return <Square value={square[i]} onClick={() => handleClick(i)} />;
  }

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <RenderSquare i={0} />
        <RenderSquare i={1} />
        <RenderSquare i={2} />
      </div>
      <div className='board-row'>
        <RenderSquare i={3} />
        <RenderSquare i={4} />
        <RenderSquare i={5} />
      </div>
      <div className='board-row'>
        <RenderSquare i={6} />
        <RenderSquare i={7} />
        <RenderSquare i={8} />
      </div>
    </div>
  );
}

export default Board;
