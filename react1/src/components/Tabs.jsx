import { useState } from "react";
import TabButton from "./TabButton"
import {data} from "./data.js"

export default function Tabs(){
    const [selectedTopic, setselectedTopic] = useState();

    function handleSelect(selectedButton){
        
        setselectedTopic(selectedButton);
        console.log(tabContent);
    }
    
    return(
        <div className="bg-warning w-50 m-3">
            <div className="d-flex gap-3 m-4">
                <TabButton isSelected= {selectedTopic==="html"} onSelect = {()=> handleSelect("html")}>Html</TabButton>
                <TabButton isSelected= {selectedTopic==="css"} onSelect = {()=> handleSelect("css")}>Css</TabButton>
                <TabButton isSelected= {selectedTopic==="javascript"} onSelect = {()=> handleSelect("javascript")}>JS</TabButton>
                <TabButton isSelected= {selectedTopic==="react"} onSelect = {()=> handleSelect("react")}>React</TabButton>
            </div>
            {selectedTopic ? 
            <div className="m-2 p-2 bg-info " id="tab-content">
                <h3>{data[selectedTopic].title}</h3>
                <p>{data[selectedTopic].description}</p>
                <pre>{data[selectedTopic].code}</pre>
            </div>
            : <p className="m-2 p-2 bg-info">Please select a topic</p>}
            

        </div>
    )
}