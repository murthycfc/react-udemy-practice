
export default function GameOver({winner, onRestart}){
    return(
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
            <div className="bg-light text-dark text-center p-5 rounded shadow z-3">
                <h2>Game Over</h2>

                {winner && <p>{winner} won the match</p>}
                {!winner && <p>Match drawn</p>}

                <button onClick={onRestart} className="btn btn-warning">
                    Rematch
                </button>
            </div>
        </div>
    )
}