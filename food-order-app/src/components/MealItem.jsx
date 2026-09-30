import { useContext } from 'react';
import {priceFormmater} from '../util/format.js';
import Button from './UI/Button.jsx';
import cartContext from '../store/CartContext.jsx';

export default function MealItem({meal}){

    const cartCntx = useContext(cartContext);

    function handleAddMealToCart(){
        cartCntx.addItem(meal)
    }
    return(
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{priceFormmater.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <div className="meal-item-actions">
                    <Button onClick={handleAddMealToCart}>Add to Cart</Button>
                </div>
            </article>

        </li>
    )
}