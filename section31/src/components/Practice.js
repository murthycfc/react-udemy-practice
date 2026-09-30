import { useEffect, useState } from "react"

export default function Practice(){
    const [count, setCount] = useState(0);
    function handleCounter(){
        setCount(count => count+1);
    }
    useEffect(()=>{ 
        const timer = setInterval(()=>{
            console.log('timer', timer)
        },2000)
        return () => {
            clearInterval(timer)
        }
    },[count])
    return(
        <>
            <h1>{count}</h1>
            <button onClick={handleCounter}>+</button>
        </>
        
    ) 
} 