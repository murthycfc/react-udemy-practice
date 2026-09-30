import { useState } from "react"


export default function GameBoard({onSelectFunc, board}){

    return (
        <ol id="game-board" className="list-unstyled container bg-dark p-3">
            {board.map((row, rowIndex)=>(
                <li key={rowIndex}>
                    <ol className="list-unstyled row g-2">
                        {row.map((playerSymbol, colIndex)=>(
                            <li key={colIndex} className="col-3 m-3 text-center">
                                <button className="btn btn-light w-50" 
                                style={{aspectRatio: "1/1"}}
                                onClick={()=> onSelectFunc(rowIndex, colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}

        </ol>
    )
}