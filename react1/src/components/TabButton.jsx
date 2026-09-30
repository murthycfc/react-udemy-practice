
export default function TabButton(props){

    return(
        <div>
            <button className={`btn m-2 ${props.isSelected? "btn-success" : ""} `} onClick={props.onSelect}>{props.children}</button>
        </div>
    )
}