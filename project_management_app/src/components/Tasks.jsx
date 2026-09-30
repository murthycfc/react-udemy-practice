import NewTask from "./NewTask";

export default function Tasks({tasks, onAddTask, onDeleteTask}){
    return(
        <section>
            <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask}/>
            {tasks.length === 0 && <p className="text-stone-600 m-3">This project don't have any projects</p>}
            {tasks.length>0 && <ul className="px-3 mt-3 rounded-md bg-stone-200">
                    {tasks.map((task) =><li key={task.id} className="flex justify-between">
                        {task.text}
                        <button onClick={()=> onDeleteTask(task.id)} className="text-red-700 p-2">Delete</button>
                    </li> )}
                </ul>}
        </section>
    )
}