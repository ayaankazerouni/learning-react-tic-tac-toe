import React from 'react';
import Board from './Board';

import './index.css';

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board initialSquares={Array(9).fill(null)}/>
        </div>
        <div className="game-info">
          Example adapted from the React documentation.
        </div>
      </div>
    );
  }
}
