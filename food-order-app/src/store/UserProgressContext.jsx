import { createContext, useState } from "react";


const UserProgressContext = createContext({
    progress: '',
    showCart: ()=>{},
    hideCart: ()=>{},
    showCheckout: ()=>{},
    hideCheckout: ()=>{}
});

export function UserProgressContextProvider({children}){
    const [userProgress, setUSerProgress] = useState('');

    function showCart(){
        setUSerProgress('cart')
    }
    function hideCart(){
        setUSerProgress('')
    }
    function showCheckout(){
        setUSerProgress('checkout')
    }
    function hideCheckout(){
        setUSerProgress('')
    }

    const userProgressCnxt = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return <UserProgressContext value={userProgressCnxt}>
        {children}
    </UserProgressContext>
}

export default UserProgressContext;

