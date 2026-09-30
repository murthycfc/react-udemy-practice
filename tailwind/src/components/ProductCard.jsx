
export default function ProductCard(props){
    return(
        <div className="w-full m-3 p-4 text-center overflow-hidden rounded-xl bg-white shadow-lg  duration-800 hover:-translate-y-2 hover:shadow-2xl">
            <img src={props.image} alt={props.name} className="h-70 rounded-md w-full object-cover"/>
            <div className="p-5">
                <h2 className="mb-2 text-xl font-bold text-gray-800">{props.name}</h2>
                <p className="mb-1 text-sm font-medium uppercase tracking-wide text-blue-600">{props.category}</p>
                <p className="mb-5 text-2xl font-semibold text-green-600">{props.price}</p>
                <button className="w-full rounded-lg bg-blue-600 px-5 py-3 text-white transition duration-300 hover:bg-blue-700">Add to cart</button>
            </div>
            

        </div>
    )
}