
const course = ["HTML", "CSS", "Javascript", "React"] 

function generateRandomNumber(max){
    return Math.floor(Math.random()*(max+1));
}

export default function Main(){
    const courseName = course[generateRandomNumber(3)];
    return(
        <div className="bg-secondary">
            <p>Main section</p>
            <p >I'm learning {courseName}</p>
        </div>
    )
}