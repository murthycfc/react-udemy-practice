import { useRef } from "react";
import { useState } from "react"
import ResultModal from "./ResultModal";
import { use } from "react";

// let timer;
export default function TimerChallenge({title, targetTime}){

    const timer = useRef();
    const dialog = useRef();

    // const [timeStarted, setTimeStarted] = useState(false);
    // const [timeExpired, setTimeExpired] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);
    const timerIsActive = timeRemaining>0 && timeRemaining<targetTime*1000;

    if(timeRemaining<=0){
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }

    function handleStart(){
        // setTimeStarted(true);
        timer.current = setInterval(()=>{
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining-10);
            // setTimeExpired(true);
            // dialog.current.showModal();
        },10);
    }


    function handleStop(){
        dialog.current.showModal();
        clearInterval(timer.current);
    }

    return(
        <>
        <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset = {handleReset}/>
        <section className="card shadow p-2 bg-info-subtle">
            <h2>{title}</h2>
            <p> {targetTime} second{targetTime>1 ? 's' : ''} </p>
            <p>
                <button className="btn btn-primary " onClick={ timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'STOP' : 'START'} challenge
                </button>
            </p>
            <p> {timerIsActive ? 'Timer is running' : 'Timer is Inactive'} </p>
        </section>
        </>
    )
}