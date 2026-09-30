import QUESTIONS from '../questions.js'


export default function Result({userAnswers}){

    const Skipped = userAnswers.filter(answer => answer === null);
    const correct = userAnswers.filter((answer,index) => answer===QUESTIONS[index].answers[0]);
    const skippedShare = Math.round(
        (Skipped.length/userAnswers.length)*100)
    const correctShare = Math.round(
        (correct.length/userAnswers.length)*100) 
    const wrongShare = 100 - skippedShare - correctShare;
    return(
        <div className='container  text-center '>
            <div>
            <h3>Quiz completed</h3>
            <p>
                <span>{skippedShare}% </span>
                <span>Skipped</span>
            </p>

            <p>
                <span>{correctShare}% </span>
                <span>answered correctly</span>
            </p>

            <p>
                <span>{wrongShare}% </span>
                <span>answerwd wrongly</span>
            </p>
            </div>
            <ol className='list-unstyled border'> {userAnswers.map((answer, index)=>{
                let cssClass = ' '
                if(answer === null){
                    cssClass+= ' text-info'
                }
                else if(answer === QUESTIONS[index].answers[0]){
                    cssClass += ' text-success';
                }
                else{
                    cssClass+= ' text-danger';
                }

                return (
                    <li className='border p-2' key={index}>
                        <h3>{index+1}</h3>
                        <p>Q: {QUESTIONS[index].text}</p>
                        <p className={cssClass}>{answer ?? 'Skipped'}</p>
                    </li>
                )
            })}
                
            </ol>
        </div>
    ) 
}