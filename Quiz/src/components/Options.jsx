import { useRef } from "react";
export default function Options({options, selectedOption, answerState, onSelect}){

    const shuffledOptions = useRef();

    if(!shuffledOptions.current){
        shuffledOptions.current = [...options];
        shuffledOptions.current.sort(()=> Math.random()-0.5);
    }
    return(
        <ul className="list-unstyled">    
            { shuffledOptions.current.map((option)=>{
                const isSelected = selectedOption === option;
                let cssClass='btn-light';
                if(answerState ==='answer' && isSelected){
                    cssClass = 'btn-warning';
                }
                if(answerState==='correct' && isSelected){
                    cssClass = 'btn-success'
                }
                if(answerState ==='wrong' && isSelected){
                    cssClass = 'btn-danger';
                }
                return (
                    <li key={option} className="mt-2 ">
                        <button 
                            onClick={()=>onSelect(option)}
                            className={`w-100 text-start px-3 py-2 btn  fw-medium ${cssClass}`}
                            disabled={answerState!== ''}
                        >{option}</button>
                    </li>
                )
            })}
        </ul>
    )
}