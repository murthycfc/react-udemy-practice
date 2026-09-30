import logo from './logo.svg';

import './App.css';
import Greeting from './components/Greeting';
import Practice from './components/Practice';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  function toggleShow(){
    setShow(prev => !prev)
  }
  return (
    <div className="App">
      <p>learn react</p>
      {/* <Greeting /> */}
      {show && <Practice />}
      <button onClick={toggleShow}>Toggle</button>
    </div>
  );
}

export default App;
