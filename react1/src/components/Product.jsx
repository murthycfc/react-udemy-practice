
export default function Product(props){
    return(
        <div className="border w-25 m-2">
            <img src={props.image} className=" w-100 h-75" alt={props.title}/>
            <p className="text-center m-2">Title: {props.title}</p>
            <p className="text-center">Price: {props.price}</p>
        </div>
    )
}