import CustomButton from "./components/CustomButton"
import MyButton from "./components/MyButton"
import ProductCard from "./components/ProductCard";

function App() {

  function handleClick(){
    alert("Manually forwarding props");
  }
  function handleAutoClick(){
    alert("Automatically forwards all props")
  }
  return (
    <>

      <MyButton className="btn btn-primary" showAlert={handleClick} disabled={true}/>
      
      {/* Props Forwarding */}
      <CustomButton className="btn btn-success" onClick={handleAutoClick}/>
      <CustomButton className="btn btn-success" disabled={true}/>
      <CustomButton className="btn btn-secondary" type="submit"/>


      <div className="d-flex">
        <ProductCard
          header ={
            <div>
              <h2>Samsung mobile</h2>
              <span className="badge bg-success">In Stock</span>
            </div>
          }

          image ={
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPltxQsbJxBExbsC77fMIfHzvLNaldUYk2ho9DybM1Q&s=10" 
            class="w-50 h-100"/>
          }

          footer ={
            <div className="d-flex justify-content-between">
              <strong>30000</strong>
              <button className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          }

          className = "card shadow w-25 p-3 m-3"
        >
          <ul>
            <li>128 GB Storage</li>
            <li>48 MP Camera</li>
          </ul>
        </ProductCard>

        <ProductCard
          header ={
            <div>
              <h2>Realme mobile</h2>
              <span className="badge bg-success">In Stock</span>
            </div>
          }

          image ={
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOnt2jADc-4fWfoolqjdS72Yr4s7QEUWoUjG88vdMNg&s=10" 
            class="w-50 h-100"/>
          }

          footer ={
            <div className="d-flex justify-content-between">
              <strong>25000</strong>
              <button className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          }

          className = "card shadow w-25 p-3 m-3"
        >
          <ul>
            <li>128 GB Storage</li>
            <li>32 MP Camera</li>
          </ul>
        </ProductCard>
      </div>
    
    </>
  )
}

export default App
