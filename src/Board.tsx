import React from 'react';
import Square from './Square';
import useCalculateWinner from './useCalculateWinner';

type IRenderSquare = {
  i: number;
};

type IBoard = {
  squares: string[];
  xIsNext: boolean;
  setSquare: (squares: IBoard['squares']) => void;
  setXIsNext: (xIsNext: IBoard['xIsNext']) => void;
};

function Board({ squares, xIsNext, setSquare, setXIsNext }: IBoard) {
  const winner = useCalculateWinner(squares);
  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const handleClick = (i: number): void => {
    const squaresCopy = squares.slice();
    if (winner || squares[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquare(squaresCopy);
    setXIsNext(!xIsNext);
  };

  function RenderSquare({ i }: IRenderSquare) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
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
