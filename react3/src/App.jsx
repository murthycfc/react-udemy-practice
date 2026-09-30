
import { useState } from 'react'
import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log';
import {WINNING_COMBINATIONS} from './winningCombinations.js'
import GameOver from './components/GameOver.jsx';

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


function deriveActivePlayer(gameTurns){
  let activePlayer = 'X';
  if(gameTurns.length>0 && gameTurns[0].player==='X'){
    activePlayer = 'O'; 
  }
  return activePlayer;
}

function App() {

  const [players, setPlayers] = useState({
    'X' : 'Player 1',
    'O' : 'Player 2'
  })
  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return{
        ...prevPlayers,
        [symbol] : newName
      };
    });
  }

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialBoard.map(array =>[...array])];
  for(const turn of gameTurns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
  }

  let winner = null;
  for(const combination of WINNING_COMBINATIONS){
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSymbol && firstSymbol===secondSymbol && secondSymbol===thirdSymbol){
      winner = players[firstSymbol];
    }
  }

  function handleActivePlayer(rowIndex, colIndex){

    setGameTurns((prevTurns)=>{
      
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedturns = [
        {
          square :{row: rowIndex, col: colIndex}, player : currentPlayer
        }, ...prevTurns
      ];
      return updatedturns;
    });
  }

  function handleRematch(){
    setGameTurns([]);
  }
  
  return (
    <main>
      <div id="game-container" className='container position-relative text-white bg-dark'>
          <ol id="players" className='d-flex justify-content-between '>
            <Player initialName="Player 1" symbol="X" 
                    isActive = {activePlayer==='X'} onNameChange = {handlePlayerNameChange}/>
            <Player initialName="Player 2" symbol="O" 
                    isActive = {activePlayer==='O'} onNameChange = {handlePlayerNameChange}/>
          </ol>
          
          {(winner || gameTurns.length===9) && <GameOver winner={winner} onRestart={handleRematch}/>}
          <GameBoard onSelectFunc={(rowIndex, colIndex)=>handleActivePlayer(rowIndex, colIndex)} board ={gameBoard}/>
          <Log turns={gameTurns}/>
      </div>
    </main>
  )
}

export default App
