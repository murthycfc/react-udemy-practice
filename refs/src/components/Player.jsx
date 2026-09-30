import { useRef } from "react";
import { useState } from "react"

export default function Player(){

    const playerName = useRef();
    const [enteredName, setEnteredName] = useState(null);

    function handleClick(){
        setEnteredName(playerName.current.value);
        playerName.current.value = '';
    }
    return(
        <>
            <section className="card shadow p-1 mx-auto mt-2"  style={{maxWidth:"600px"}}>
                <div className="card-body text-center">
                    <h2 className="">Welcome { enteredName ?? 'unknown user' }</h2>
                    <p className="">
                        <input type="text" ref={playerName} className="form-control"/>
                        <button onClick={handleClick} className="btn btn-primary w-10 mt-3">Set name</button>
                    </p>
                </div>
            </section>
        </>
    )
}