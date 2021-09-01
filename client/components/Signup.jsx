import React from 'react';

const Signup = props => {
  return (
    <div className="signUpForm"> 
        <input id="username" label="username" type="text" onChange={(e) => {props.handleChange(e.target.label, e.target.value)}}/> 
        <input id="password" label="password" type="password" onChange={(e) => {props.handleChange(e.target.label, e.target.value)}}/>
        <button id="signUpButton" type="submit" onClick={props.signUpUser}>Sign Up</button>
    </div>
  )
}

export default Signup;