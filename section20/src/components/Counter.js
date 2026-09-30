import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/counterSlice'

const Counter = () => {
  const dispatch = useDispatch();
  
  const counter = useSelector(state => state.counter.value);
  const show = useSelector(state => state.counter.showCounter);

  function handleInc(){
    dispatch(counterActions.increment())
  }
  function handleDec(){
      dispatch(counterActions.decrement())
  }
  function handleReset(){
    dispatch(counterActions.reset())
  }

  function handleIncBy10(){
    dispatch(counterActions.incrementby10(10))
  }


  function handleToggle(){
    dispatch(counterActions.toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleDec}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleInc}>+</button>
        <button onClick={handleIncBy10}>Increase by 10</button>
        
      </div>
      <button onClick={handleToggle} >Toggle Counter</button>
    </main>
  );
};

export default Counter;
