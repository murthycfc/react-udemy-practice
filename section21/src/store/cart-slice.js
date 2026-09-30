import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalItems:0,
        totalAmount: 0
    },
    reducers:{
        addToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalItems++;
            state.totalAmount = state.totalAmount+newItem.price;
            if(existingItem){
                existingItem.quantity = existingItem.quantity+1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
            else {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price 
                })
            }
        },
        removeFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalItems--;
            state.totalAmount = state.totalAmount - existingItem.price;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})

export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending',
                message: 'Sending cart data'
            })
        );

        const sendRequest = async () => {
            const response = await fetch('url', {
                method: 'PUT',
                body: JSON.stringify(cartData)
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success',
                    message: 'Sending cart data successfully'
                })
            );

        } catch (error) {

            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Sending cart data failed'
                })
            );
        }
    };
};
export default cartSlice;
export const cartActions = cartSlice.actions