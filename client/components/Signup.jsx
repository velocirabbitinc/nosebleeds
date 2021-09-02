import React from 'react';

const Signup = props => {
  return (
    <div className="signUpForm">
        <h3>CREATE A NEW ACCOUNT</h3>
        <p className='usernameInput'>
          <input 
            placeholder='USERNAME' 
            id="username" 
            label="username" 
            type="text" 
            onChange={(e) => {
              props.handleChange(e.target.getAttribute('label'), e.target.value)}
            }/>
        </p>
        <p className='passwordInput'>
          <input 
            placeholder='PASSWORD' 
            id="password" 
            label="password" 
            type="password" 
            onChange={(e) => {
              props.handleChange(e.target.getAttribute('label'), e.target.value)}
            }/>
        </p> 
        <button 
          id="signUpButton" 
          type="submit" 
          onClick={props.signUpUser}>
            SIGN UP
        </button>
        <button 
          id="returnToLoginButton" 
          type="submit" 
          onClick={props.returnToLogin}>
            RETURN TO LOGIN
        </button>
    </div>
  )
}

export default Signup;