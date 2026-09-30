import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { priceFormmater } from "../util/format";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
    method: "POST",
    headers: {
        'Content-Type' : 'application/json'
    }
}
export default function Checkout(){

    const cartCntx = useContext(CartContext);
    const userProgressCnxt = useContext(UserProgressContext);
    
    const {data, isLoading: isSending, error, sendRequest, clearData} = useHttp('http://localhost:3000/orders', requestConfig)
    console.log(error);

    const cartAmount = cartCntx.items.reduce((total, item) => total+item.price*item.quantity ,0 );

    function handleClose(){
        userProgressCnxt.hideCheckout();
    }

    function handleConfirm(){
        userProgressCnxt.hideCheckout();
        cartCntx.clearCart();
        clearData();
    }

    function handleSubmit(event){
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerDetails = Object.fromEntries(fd.entries());

        sendRequest(
            JSON.stringify({
                order:{
                    items: cartCntx.items,
                    customer: customerDetails
                }
            })
        )
    }

    let actions = (
        <>
            <Button type="button" textOnly onClick={handleClose}>Close</Button>
            <Button>Place order</Button>
        </>
    )
    if(isSending){
        actions = <span>Placing order</span>
    }

    if(data && !error){
        return <Modal open={userProgressCnxt.progress ==='checkout'} onClose={handleClose}>
            <h2>Please confirm your order</h2>
            <p className="modal-actions">
                <Button onClick={handleConfirm}>Confirm</Button>
            </p>
        </Modal>
    }

    return <Modal open={userProgressCnxt.progress ==='checkout'} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {priceFormmater.format(cartAmount)} </p>
            <Input label="Full name" type="text" id="name"/>
            <Input label="Email" type="email" id="email"/>
            <Input label="Street" type="text" id="street"/>
            <div className="control-row">
                <Input label="Pincode" type="text" id="pincode"/>
                <Input label="City" type="text" id="city"/>
            </div>
            {error && <Error title="Failed to place order" message={error}/>}
            
            <p className="modal-actions">
                {actions}
            </p>
            
        </form>
    </Modal>
}