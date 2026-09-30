import { Link } from "react-router-dom"


export default function Home(){
    return <>
    
        <h2>Home page</h2>
        <p>Go to <Link to="products"> products</Link> page</p>
    </>
}