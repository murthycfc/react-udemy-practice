import { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import cartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
export default function Header(){
    const cartCntx = useContext(cartContext);
    const userProgressCnxt = useContext(UserProgressContext)
    
    const totalItems = cartCntx.items.reduce((total,item)=> {
        return total+item.quantity;
    },0);

    function handleShowCart(){
        userProgressCnxt.showCart();
    }

    return(
        <header id="main-header">
            <div id="title">
                <img src={logo} alt='food app logo' />
                <h1>Food App</h1>
            </div>
            <div>
                <Button textOnly onClick={handleShowCart} >Cart ({totalItems})</Button>
            </div>
        </header>
    )
}