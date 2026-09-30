import { useEffect, useState } from "react"

export default function QuestionTimer({timeout, onTimeout}){
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
                setRemainingTime((prevTime) => prevTime-1000);
            }, 1000);
        return ()=>{
            clearInterval(interval)
        }
    },[])


    useEffect(()=>{
        const timer = setTimeout(onTimeout, timeout);
        return ()=>{
            clearTimeout(timer);
        }
    },[timeout, onTimeout])
    
    
    return(
        <>
            {/* <Progress max={timeout} value={remainingTime}/> */}
            <p className="d-flex align-items-center justify-content-center text-center bg-info rounded-circle mx-auto" style={{width:'40px', height:'40px'}}>{remainingTime/1000}</p>
        </>
    )
}