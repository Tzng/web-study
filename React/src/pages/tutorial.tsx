import React from "react";

//定义图形组件
    const Square = ({value,onSquareClick}) => {
      return(
          <button className="square" onclick={onSquareClick}>{value}</button>
      )
    }




    const Board = ({xIsNext, squares, onPlay}) => {
      const handleClick = (i) => {
        if (calculateWinner(squares) || squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = 'X';
        }else{
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
      }
      //获取获胜方
      const winner = calculateWinner(squares);
      //存储上方提示
      let status;
      if(winner){
          status = 'Winner:' + winner;
      }else{
          status='Next player:' + (xIsNext? 'X':'O');
      }
      return(
          <>
              <div className="status">{status}</div>
              <div className="board-row">
                  <Square value={squares[0]} onSquareClick={()=> handleClick(0)}/>
                  <Square value={squares[1]} onSquareClick={()=> handleClick(1)}/>
                  <Square value={squares[2]} onSquareClick={()=> handleClick(2)}/>
              </div>
              <div className="board-row">
                  <Square value={squares[3]} onSquareClick={()=> handleClick(3)}/>
                  <Square value={squares[4]} onSquareClick={()=> handleClick(4)}/>
                  <Square value={squares[5]} onSquareClick={()=> handleClick(5)}/>
              </div>
              <div className="board-row">
                  <Square value={squares[6]} onSquareClick={()=> handleClick(6)}/>
                  <Square value={squares[7]} onSquareClick={()=> handleClick(7)}/>
                  <Square value={squares[8]} onSquareClick={()=> handleClick(8)}/>
              </div>

          </>
      );
    }
    const Game = () => {
        const[history, setHistory] = useState([Array(9).fill(null)]);

    }

export default Game;





