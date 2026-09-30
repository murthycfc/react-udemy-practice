import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

function App() {
  
  const [userInputs, setUserInputs] = useState({
        initialInvestment: 50000,
        annualInvestment: 10000,
        expectedReturns: 5,
        duration: 10
    });

    const inputIsValid = userInputs.duration>=1;

    function handleChange(identifier, value){
        setUserInputs((prevUserInputs) =>{
            return {
                ...prevUserInputs,
                [identifier]: +value
            };
        });
    }

  return (
    <>
      <Header />
      <UserInput userInput = {userInputs} onChangeFunc ={handleChange} />
      {!inputIsValid && <p className='text-center m-4 p-4 text-danger fw-bold'>Please enter valid duration</p>}
      {inputIsValid && <Results userInput={userInputs}/>}
    </>
  )
}

export default App
