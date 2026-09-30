import { useState } from "react";
import Input from "./Input";
import {isEmail, isNotEmpty, hasMinLength}  from '../util/validation.js'
export default function Login() {


  const [inputs, setInputs] = useState({
    email: '',
    password:''
  })

  const [didEdit, setDidEdit]  = useState({
    email: false,
    password: false
  })

  function handleChange(identifier, value){
    setInputs((prevValues)=>({
      ...prevValues,
      [identifier]: value
    }))
    setDidEdit((prevEdit)=>({
      ...prevEdit,
      [identifier] : false
    }))
  }
  // function handleChange(identifier, event){
  //   setInputs({
  //     ...inputs,
  //     [identifier]: event.target.value
  //   })
  //   setDidEdit({
  //     ...didEdit,
  //     [identifier] : false
  //   })
  // }

  function handleInputBlur(identifier){
    setDidEdit((prevEdit)=>({
      ...prevEdit,
      [identifier] : true
    }))

  }
  const emailIsInvalid = didEdit.email && ((!isEmail(inputs.email)) || (!isNotEmpty(inputs.email)))
  const passwordInvalid = didEdit.password && !hasMinLength(inputs.password,6);

  function handleSubmit(event){
    event.preventDefault();
    console.log(inputs.email+ ' '+ inputs.password);
    setInputs({
      email:'',
      password:''
    })

    // refs
    // email.current.value='';
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      <div className="control-row">
          <Input 
              label="Email" 
              id="email" 
              type="email"
              name="email"
              onBlur={()=>handleInputBlur('email')}
              onChange={(event)=>handleChange('email', event.target.value)}
              value={inputs.email}
              error={emailIsInvalid && 'Please enter valid email'}
          />
          <Input 
              label="Password" 
              id="password" 
              type="password"
              name="password"
              onBlur={()=>handleInputBlur('password')}
              onChange={(event)=>handleChange('password', event.target.value)}
              value={inputs.password}
              error={passwordInvalid && 'Password must atleast 6 chars'}
          />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
