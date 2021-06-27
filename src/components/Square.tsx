import React from "react";
import { CellType } from "../types/Types";

interface SquareProps {
  value: CellType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  let stringValue = "";
  if (value === CellType.X) {
    stringValue = "X";
  } else if (value === CellType.O) {
    stringValue = "O";
  }

  return (
    <button className="square" onClick={onClick}>
      {stringValue}
    </button>
  );
};

export default Square;
