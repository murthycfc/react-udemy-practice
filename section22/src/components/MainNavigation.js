import { NavLink } from "react-router-dom"
export default function MainNavigation(){
    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/" style={({isActive})=> ({color: isActive ? 'green' : 'blue'})} end>Home</NavLink></li>
                    <li><NavLink to="/products" style={({isActive})=> ({color: isActive ? 'green' : 'blue'})}>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}