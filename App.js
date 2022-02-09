import "./App.css";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Components/Patterns";

function App() {
  // Nine Squares
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  useEffect(() => {
    checkWin();
    checkIfTie();
    if (player == "X") {
      setPlayer("0");
    } else {
      setPlayer("X");
    }
  }, [board]);

  // anytime there is a winner
  useEffect(() => {
    if (result.state != "none") {
      alert(`Game Finished! \n Winning Player:${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, index) => {
        if (index == square && val == "") {
          return player;
        }
        return val;
      })
    );
  };

  // Checking the Patterns winning
  const checkWin = () => {
    Patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currentPattern.forEach((index) => {
        if (board[index] != firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" });
      }
    });
  };

  // Checking the Patterns tie
  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    })
    if (filled) {
      setResult({winner: "No One", state: "Tie"});
    }
  }

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  }

  return (
    <div className="App">
      <div className="board">
        {/* Rows of squares  */}
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
