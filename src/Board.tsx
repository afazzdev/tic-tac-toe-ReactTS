import React from 'react';
import Square from './Square';

type IRenderSquare = {
  i: number;
};

type IBoard = {
  current: string[];
  setHistory: (i: number) => void;
};

function Board({ current, setHistory }: IBoard) {
  function RenderSquare({ i }: IRenderSquare) {
    return <Square value={current[i]} onClick={() => setHistory(i)} />;
  }

  return (
    <div>
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
