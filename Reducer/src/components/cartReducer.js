
export default function cartReducer(state, action){
    switch(action.type){
        case "ADD":
            return [
                ...state,
                action.product
            ]
        case "REMOVE":
            return state.filter((item)=> item.id!==action.id);
        
        case "INCREASE":
            return state.map((item) =>
                item.id===action.id ? {...item, quantity: item.quantity+1} : item
            );
        
        case "DECREASE":
            return state.map((item) => 
                item.id===action.id ? {...item, quantity: Math.max(1, item.quantity-1)} : item
            );

        default:
            return state;
    }
}