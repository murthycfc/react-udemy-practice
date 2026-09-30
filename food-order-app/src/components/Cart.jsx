import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { priceFormmater } from "../util/format";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart(){
    const cartCntx = useContext(CartContext)
    const userProgressCnxt = useContext(UserProgressContext);

    const cartAmount = cartCntx.items.reduce((total, item) => total+item.price*item.quantity ,0 );
    function handleCloseCart(){
        userProgressCnxt.hideCart();
    }
    function handleGoToCheckout(){
        userProgressCnxt.showCheckout()
    }
    return <Modal className="cart" open={userProgressCnxt.progress === 'cart'} onClose={userProgressCnxt.progress==='cart' ? handleCloseCart : null}>
        <h2>Your cart</h2>
        <ul>
            {cartCntx.items.map(item => {
                return <CartItem key={item.id} item={item} onIncrease={()=>cartCntx.addItem(item)} onDecrease={()=>cartCntx.removeItem(item.id)}/>
            })}
        </ul>
        <p className="cart-total">{priceFormmater.format(cartAmount)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            {cartCntx.items.length>0 && <Button onClick={()=> handleGoToCheckout()}>Go to checkout</Button>}
        </p>
    </Modal>
}