
import QuestionTimer from "./QuestionTimer"
import Options from "./Options"
import { useState } from "react"
import QUESTIONS from '../questions.js';

export default function Question({index,  onSelect, handleSkipAnswer}){

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })
    let timer = 10000;
    if(answer.selectedAnswer){
        timer = 1000;
    }
    if(answer.isCorrect!=null){
        timer= 2000
    }
    function handleSelectAnswer(answer){
        const isCorrect = QUESTIONS[index].answers[0] === answer;
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(()=>{
            setAnswer({
                selectedAnswer: answer,
                isCorrect: isCorrect
            })
            setTimeout(()=>{
                onSelect(answer)
            },2000);
        }, 1000)
    }

    let answerState ='';
    if(answer.selectedAnswer && answer.isCorrect!== null ){
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }
    else if(answer.selectedAnswer){
        answerState = 'answer';
    }

    return(
        <div className="w-75 h-50 mx-auto m-3  px-4 py-3 rounded bg-primary-subtle shadow-sm">
                <QuestionTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer ==='' ? handleSkipAnswer : null}/>
                <h3 className="mb-3">{QUESTIONS[index].text}</h3>
                <Options 
                    options={QUESTIONS[index].answers} 
                    selectedOption={answer.selectedAnswer}
                    answerState={answerState}
                    onSelect={handleSelectAnswer}
                />
            </div>
    )
}