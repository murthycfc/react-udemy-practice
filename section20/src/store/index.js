
import { configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import authReducer from './authSlice'

// const counterReducer = (state=initialState, action) =>{
//     console.log('reducer function')
//     switch (action.type) {
//         case 'increment':
//             return {
//                 counter: state.counter+1,
//                 showCounter: state.showCounter
//             }

//         case 'incrementby10':
//             return {
//                 counter: state.counter+action.payload,
//                 showCounter: state.showCounter
//             }
        
//         case 'decrement':
//             return {
//                 counter: state.counter-1,
//                 showCounter: state.showCounter
//             }
        
//         case 'reset': 
//             return {
//                 counter: 0,
//                 showCounter: state.showCounter
//             }

//         case 'toggle':
//             return {
//                 counter: state.counter,
//                 showCounter: !state.showCounter
//             }
//         default:
//             return state
//     }
// }

// const store = createStore(counterReducer);


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});



export default store;