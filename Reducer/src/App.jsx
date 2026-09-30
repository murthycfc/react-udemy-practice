import { useReducer } from "react"
import cartReducer from "./components/cartReducer"
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";


function App() {
  const [cart, dispatch] = useReducer(cartReducer,[]);
  function handleAdd(product){
    dispatch({type:"ADD", product: product})
  }
  return (
    <div>
        <h1>Shopping Cart</h1>
        <ProductList onAdd={handleAdd}/>
        <hr></hr>
        <Cart cart={cart} dispatch={dispatch}/>
    </div>
  )
}

export default App
