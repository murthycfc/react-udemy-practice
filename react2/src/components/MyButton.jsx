
export default function MyButton(props){
    return(
        // Forward selective prop attributes
        <button className={props.className} onClick={props.showAlert}>Click me</button>
    )
}