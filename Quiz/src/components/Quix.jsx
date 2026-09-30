import { useCallback, useState, useRef  } from "react"
import QUESTIONS from '../questions.js';
import QuestionTimer from "./QuestionTimer.jsx";
import Options from "./Options.jsx";
import Question from "./Question.jsx";
import Result from "./Result.jsx";
export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);
    
    const activeQuestionIndex =  userAnswers.length;
    
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectOption = useCallback(function handleSelectOption(selectedOption){
        setUserAnswers(prevAnswers =>
            [...prevAnswers, selectedOption]
        );
    },[]);

    const handleSkipAnswer = useCallback(()=>handleSelectOption(null),[handleSelectOption]);

    if(quizIsCompleted){
        return <Result userAnswers={userAnswers} />
    }
    
    return(
        <div >
            <Question 
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelect={handleSelectOption}    
                handleSkipAnswer={handleSkipAnswer}
            />

        </div>
    )
}