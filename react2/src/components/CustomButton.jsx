
export default function CustomButton(props){
    return(
        // forwarding all props
        <button {...props}>
            Custom button
        </button>
    )
}