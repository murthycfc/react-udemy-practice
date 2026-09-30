import ProductCard from "./components/ProductCard"
import mobile from "./assets/download.jpg";
import Login from "./components/Login";

function App() {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <ProductCard image={mobile} name="I phone" category="Electronics" price={50000}/>
        <ProductCard image={mobile} name="I phone" category="Electronics" price={60000}/>
        <ProductCard image={mobile} name="I phone" category="Electronics" price={70000}/>
        <ProductCard image={mobile} name="I phone" category="Electronics" price={80000}/>
      </div>
      <Login/>
    </>
    
  )
}

export default App
