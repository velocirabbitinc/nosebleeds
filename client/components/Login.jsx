import React from 'react';

const Login = props => {
    return (
        <div className='login'>
            <p>
                <input
                    placeholder='USERNAME' 
                    label='username' 
                    type="text" 
                    onChange={(e) => {
                        props.handleChange(e.target.getAttribute('label'), e.target.value)}
                    }/>
            </p>
            <p className='passwordInput'>
                <input
                    placeholder='PASSWORD'
                    label='password' 
                    type="password" 
                    onChange={(e) => {
                        props.handleChange(e.target.getAttribute('label'), e.target.value)}
                    }/>
            </p>
            <button 
                id='loginButton' 
                type='submit' 
                onClick={props.login}>
                    LOGIN
            </button>
            <button 
                id='signUpFormButton' 
                type='submit' 
                onClick={props.signUpForm}>
                    CREATE A NEW ACCOUNT
            </button>
        </div>
    )
}

export default Login;