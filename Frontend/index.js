// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// //import styles from './styles/styles.scss';


// ReactDOM.render(<App />, document.getElementById('root'));
// //registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory,
        BrowserRouter as Router,
        Link,
        Route,
    } from 'react-router-dom';

import HomePage from './component/homepage';
import './styles/styles.css'

const App = () => {
  const signUp = (user, pass) => { 
      console.log(user);
    fetch("/post", {
      method: 'POST',
      body: JSON.stringify(
        {username : user, 
      password: pass}),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => res.json())
        .then(result => {result}
        )};

        const Login = (user, pass) => { 
            console.log(user);
          fetch("/login", {
            method: 'POST',
            body: JSON.stringify(
              {username : user, 
            password: pass}),
              headers: {
                'Content-Type': 'application/json',
              }
            })
              .then(res => res.json())
              .then(result => console.log(user))
        };
            
  const getData = () =>{fetch('https://api.seatgeek.com/2/events?client_id=MjMwODQ2OTZ8MTYzMDA5MTEwMy4xMjAzNg&geoip=true&performers.slug=los-angeles-dodgers')
  .then(response => response.json())
  .then(data => console.log(data))}
  
//   const usernameTest = document.getElementById('username').value
//   console.log(usernameTest);
 
  return(
      
      
      <Router>
        
        <Route exact path="/" component={App}> 
            <h1 className="primary">THE NOSEBLEEDS</h1>
            <div id='login'>
             <input type ='text' id='username' placeholder="username"></input>
            <input type = 'text' id="password" placeholder="password"></input>
              <button onClick={() => Login((document.getElementById('username').value), (document.getElementById('password').value))} type="button" className="buttons" type="button" className="buttons">Login</button>
              <button onClick={() => signUp((document.getElementById('username').value), (document.getElementById('password').value))} type="button" className="buttons">Sign up</button>
            </div>
        </Route>
        <Route path="/homepage" component={HomePage}>
            <HomePage />
        </Route>
        
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

