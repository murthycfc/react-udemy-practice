
export default function Cart({cart, dispatch}){
    return(
        <div>
            <h2>Cart</h2>
            {cart.length===0 && (<p>Cart is empty</p>)}
            
            { cart.map((item)=>(
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p> {item.price * item.quantity} </p>
                    <button onClick={()=> dispatch({type:"DECREASE", id: item.id})}>
                        -
                    </button>
                    <span> {item.quantity} </span>
                    <button onClick={()=> dispatch({type:"INCREASE", id: item.id})}>
                        +
                    </button>
                    <button onClick={()=> dispatch({type:"REMOVE", id: item.id})}>
                        Remove
                    </button>
                </div>
            )) 

            }
        </div>
    )
}