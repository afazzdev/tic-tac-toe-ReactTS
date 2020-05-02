import React from 'react';

type ISquare = {
  value?: string | null;
  onClick?: React.MouseEventHandler;
};

type State = string | null;

function Square({ value, onClick }: ISquare) {
  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
