import { useState } from "react"

export default function NewTask({onAddTask}){
    const [enteredTask, setEnteredTask] = useState('');
    function handleChange(e){
        setEnteredTask(e.target.value)
    }
    function handleClick(){
        if(enteredTask.trim()===''){
            return;
        }
        onAddTask(enteredTask);
        setEnteredTask('');
    }
    return(
        <div className="flex items-center gap-4">
            <input 
                type="text"
                onChange={handleChange}
                value={enteredTask}
                className="w-64 px-2 py-1 rounded-sm bg-stone-300"
            />
            <button onClick={handleClick} className="text-stone-100 p-2 bg-green-600 rounded-md">Add Task</button>
        </div>
    )
}