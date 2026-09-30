import Button from "./Button";

export default function ProjectSidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}){
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="mt-6">
                {projects.map((project)=>{
                    let cssClasses = "w-full text-left px-2 py-1 rounded-md my-2  hover:text-stone-200 hover:bg-stone-600";
                    if(project.id == selectedProjectId){
                        cssClasses+= ' text-stone-200 bg-stone-400'
                    }else{
                        cssClasses+= ' bg-stone-700'
                    }
                    return(
                    <li key={project.id}>
                        <button 
                            onClick={()=> onSelectProject(project.id)} 
                            className={cssClasses}>{project.title}
                        </button>
                        
                    </li>)
                }
            )}
            </ul>
        </aside>
    )
}