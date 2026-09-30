import { useState } from "react";
export default function Player({initialName, symbol, isActive, onNameChange}){

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing((isEditing) => !isEditing);

        if(isEditing){
            onNameChange(symbol, playerName);
        }
    }

    function handleChange(e){
        setPlayerName(e.target.value);
    }

    let editablePlayerName = <span className='playerName'>{playerName}</span>;

    if(isEditing){
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required/>
    }

    return(
        <div className={`p-2 rounded text-white d-flex justify-content-between ${isActive? "bg-success" : "bg-danger"} `}>
            <span className="player">
                {editablePlayerName}
                <span className='playerSymbol m-3'>{symbol}</span>
            </span>
            <button className="btn btn-warning" onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </div>
    )
}