
export default function ResultModal({ ref , targetTime, remainingTime, onReset}){

    const userLost = remainingTime<=0;
    const formattedTimeRemaining = (remainingTime/1000).toFixed(2);
    const score = Math.round((1-remainingTime/(targetTime*1000))*100);

    return(
        <dialog ref={ref} className={`z-1 ${userLost ? 'bg-danger text-white' : 'bg-success text-white'} rounded`}  style={{maxWidth:'900px'}} >
            { userLost && <h2>You Lost</h2>}
            {!userLost && <h2>You Won </h2>}
            {!userLost && <h4>Your score: {score}</h4>}
            <p>The target time was <strong>{targetTime}</strong> seconds </p>
            <p>You stopped the timer with <strong>{formattedTimeRemaining} seconds lefts</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button className="btn btn-warning">Close</button>
            </form>
        </dialog>
    )
}