import Button from "./Button";

export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="mt-24 text-center w-2/3">
            <h2 className="text-2xl font-bold text-stone-500 m-5">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p className="mt-4">
                <Button onClick={onStartAddProject}>Create new Project</Button>
            </p>
        </div>
    )
}