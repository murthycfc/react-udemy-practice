import Tasks from "./Tasks";

export default function SelectedProject({tasks, project, onDelete, onAddTask, onDeleteTask}){
    return(
        <div className="w-140 mt-16">
            <header className="mb-4 pb-4 border-b-2 border-stone-400">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-stone-600">{project.title}</h1>
                    <button onClick={onDelete} className="text-stone-600 hover:text-stone-900">Delete</button>
                </div>
                <p className="text-stone-400">{project.dueDate}</p>
                <p className="text-stone-400 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks}/>
        </div>
    )
}