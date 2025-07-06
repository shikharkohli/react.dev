import React from "react";
import { useState } from "react";

interface ButtonProps {
  value?: string;
  children?: string;
  onSquareClick?: function;
}

function Square({ value, children, onSquareClick }: ButtonProps) {
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}

export default function Board() {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index) {
    const nextSquares = boardState.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setBoardState(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Square
          className="square"
          onSquareClick={() => handleClick(0)}
          value={boardState[0]}
        >
          X
        </Square>
        <Square
          className="square"
          onSquareClick={() => handleClick(1)}
          value={boardState[1]}
        >
          X
        </Square>
        <Square
          className="square"
          onSquareClick={() => handleClick(2)}
          value={boardState[2]}
        >
          X
        </Square>
      </div>
      <div className="board-row">
        <Square
          className="square"
          onSquareClick={() => handleClick(3)}
          value={boardState[3]}
        >
          X
        </Square>
        <Square
          className="square"
          onSquareClick={() => handleClick(4)}
          value={boardState[4]}
        >
          X
        </Square>
        <Square
          className="square"
          onSquareClick={() => handleClick(5)}
          value={boardState[5]}
        >
          X
        </Square>
      </div>
      <div className="board-row">
        <Square
          className="square"
          onSquareClick={() => handleClick(6)}
          value={boardState[6]}
        >
          X
        </Square>
        <Square
          className="square"
          onSquareClick={() => handleClick(7)}
          value={boardState[7]}
        >
          X
        </Square>
        <Square
          className="square"
          onSquareClick={() => handleClick(8)}
          value={boardState[8]}
        >
          X
        </Square>
      </div>
    </>
  );
}
