import { Footer } from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Product from "./components/Product"
import reactImg from "./assets/react.svg"
// import BB from "./assets/BB.jpg"
import BB from "./assets/BB.jpg";
import heroImg from "./assets/hero.png"
import Tabs from "./components/Tabs"

function App() {

  return (
    <div>
      <Header/>
      <Main/>
      <div className="d-flex">
        <Product title="Redmi mobile" price="25000" image={reactImg}/>
        <Product title="Redmi mobile" price="25000" image={heroImg}/>
        <Product title="Redmi mobile" price="25000" image={BB}/>
      </div>

      <Tabs/>
      
      <Footer/>
    </div>
  )
}

export default App
