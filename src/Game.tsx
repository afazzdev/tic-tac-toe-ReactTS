/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import './Game.css';
import Board from './Board';
import calculateWinner from './calculateWinner';

type TIndex = number;

type TSquare = { squares: string[] };
type THistory = TSquare[];
type TStep = number;
type TXIsNext = boolean;

type TState = {
  history: THistory;
  stepNumber: TStep;
  xIsNext: TXIsNext;
};

const initialState = {
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
  stepNumber: 0,
  xIsNext: true,
};

function Game() {
  const [state, setState] = useState<TState>(initialState);

  const handleClick = (i: TIndex): void => {
    const { stepNumber, xIsNext } = state;
    const history = state.history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !xIsNext,
    });
  };

  const jumpTo = (step: TStep) => {
    if (step === 0) return setState(initialState);
    setState({
      ...state,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  };

  const moves = state.history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Reset';
    return (
      <li key={`key-${move}`}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const { history, stepNumber } = state;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board current={current.squares} setHistory={handleClick} />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
