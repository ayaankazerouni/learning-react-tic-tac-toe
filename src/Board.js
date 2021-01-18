import React, { useState } from 'react';
import Square from './Square';
import Banner from './Banner';
import { calculateWinner } from './helpers';

// React Hooks
export default function Board() {
  // useState
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ winner, setWinner ] = useState(null);
  const [ xIsNext, setXIsNext ] = useState(true);

  const status = 'Next player: X';

  const handleClick = (i) => {
    const squareCopy = squares.slice();
    squareCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squareCopy);
    setWinner(calculateWinner(squareCopy));
    setXIsNext(!xIsNext);
  }

  const renderSquare = (i) => {
    return <Square
      value={squares[i]} 
      onClick={() => handleClick(i)} />
  };

  return (
    <div>
      <div className="status" onClick={() => setSquares("X")}>{status}</div>
      {
        winner ? <Banner name={winner} /> : null
      }
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

/**
 * CLASS VERSION OF THE BOARD COMPONENT
 */

// class Board extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       squares: Array(9).fill(null),
//       winner: null,
//       xIsNext: true
//     };
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     const winner = calculateWinner(squares);
//     this.setState({squares: squares, winner: winner, xIsNext: !this.state.xIsNext});
//   }

//   renderSquare(i) {
//     const clicker = () => this.handleClick(i);
//     return <Square
//       value={this.state.squares[i]} 
//       onClick={clicker} />
//   }

//   render() {
//     const status = 'Next player: X';
//     // Can just write javascript here
//     return (
//       <div>
//         {
//           this.state.winner ? <Banner name={this.state.winner} /> : null
//         }
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }
