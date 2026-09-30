import { priceFormmater } from "../util/format";
import Button from "./UI/Button";

export default function CartItem({item, onIncrease, onDecrease, ...props}){
    return (
        <li className="cart-item">
            <p>
                {item.name} - { item.quantity} x { priceFormmater.format(item.price)}
            </p>
            <p className="cart-item-actions">
                <Button onClick={onDecrease}>-</Button>
                <span>{item.quantity}</span>
                <Button onClick={onIncrease}>+</Button>
            </p>
        </li>
    )
}