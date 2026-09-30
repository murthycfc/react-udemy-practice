import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { sendCartData } from './store/cart-slice';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/notification';
let  isInitial = true;
function App() {
  const cart = useSelector((state) => state.cart)
  const showCart = useSelector((state) => state.ui.show);
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch();

useEffect(() => {
  if(isInitial){
    isInitial = false;
    return
  }
  dispatch(sendCartData(cart));
}, [cart, dispatch]);
    

  return (
    <>
      {notification && 
        <Notification 
            status = {notification.status}
            title = {notification.title}
            message = {notification.message}
        />}
      <Layout>
      {showCart && <Cart />}
      <Products />
      </Layout>
    </>
    
  );
}

export default App;
