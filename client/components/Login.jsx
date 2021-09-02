import React from 'react';

const Login = props => {
    return (
        <div className='login'>
            <p>Username<input label='username' onChange={(e) => {props.handleChange(e.target.getAttribute('label'), e.target.value)}}/></p>
            <p>Password<input label='password' onChange={(e) => {props.handleChange(e.target.getAttribute('label'), e.target.value)}}/></p>
            <button id='loginButton' type='submit' onClick={props.login}>Login</button>
            <button id='signUpFormButton' type='submit' onClick={props.signUpForm}>Create A New Account</button>
        </div>
    )
}

export default Login;