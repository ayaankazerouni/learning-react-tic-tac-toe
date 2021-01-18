import React from 'react';

export default function Square(props) {
  // Object destructuring syntax
  const { value } = props; // props = { value: ..., onClick: ... }
  return (
    <button className="square" onClick={() => props.onClick()}>
      {value}
    </button>
  );
}
