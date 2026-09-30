
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000
    },
    {
        id: 3,
        name: "Headphones",
        price: 3000
    }
];

export default function ProductList({onAdd}){
    return(
        <div>
            <h2>Products</h2>
            { products.map((product) =>(
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={()=>onAdd({...product, quantity:1})}>
                        Add to cart
                    </button>
                </div>
            ))
            }
        </div>
    )
}