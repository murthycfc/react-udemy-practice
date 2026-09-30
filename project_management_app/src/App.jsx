

import { useState } from 'react'
import './App.css'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import ProjectSidebar from './components/ProjectSidebar'
import SelectedProject from './components/SelectedProject'

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  })

  function handleAddTask(text){
    setProjectState(prevState =>{
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId, 
        id: taskId
      }
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }
  function handleDeleteTask(id){
    setProjectState((prevState) =>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    })
  }

  function handleStartAddProject(){
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: null
      };
    });
  }

  function handleCancel(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined
      }
    })
  }

  function handleSelectProject(id){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:id
      }
    })
  }

  function handleAddProject(projectData){
    setProjectState(prevState =>{
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleDeleteProject(){
    setProjectState((prevState) =>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    })
  }

  const selectedProject = projectState.projects.find(project => project.id===projectState.selectedProjectId);
  
  const selectedProjectTasks = projectState.tasks.filter(
    task => task.projectId === projectState.selectedProjectId);

  let content ;
  if(projectState.selectedProjectId===undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  else if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel}/>
  }
  else{
    content = <SelectedProject tasks={selectedProjectTasks} project={selectedProject}
     onDelete={handleDeleteProject} 
     onAddTask={handleAddTask}
     onDeleteTask={handleDeleteTask}/>
  }

  console.log(projectState);

  return (
    <main className='h-screen my-4 flex gap-8'>
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId}/>
      {content}
    </main>
  )
}

export default App
