import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}){

    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(
            enteredTitle.trim()==='' ||
            enteredDescription.trim()==='' || 
            enteredDueDate.trim() ===''
        ){
            modal.current.showModal();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return(
        <>
        <Modal ref={modal} >
            All fields need to be entered
        </Modal>
        <div className="w-140 mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <button onClick={onCancel} className="bg-red-700 hover:bg-red-900 px-4 py-2 rounded-md">Cancel</button>
                <button onClick={handleSave} className="bg-green-700 hover:bg-green-900 px-4 py-2 rounded-md">Save</button>
            </menu>
            <div>
                <Input type="text" ref = {title} label="Title" />
                <Input ref={description} label="Description" isTextArea/>
                <Input type="date" ref={dueDate} label="Due Date"/>
            </div>
        </div>
        </>
    )
}