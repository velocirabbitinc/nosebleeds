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

import TestComp from './component/testcomp';
import './styles/styles.css'

const App = () => {
    //let history = useHistory();
//   getUsers = () => { 
//     fetch("/post", {
//       method: 'POST',
//       body: JSON.stringify(
//         {username : "Daniel12", 
//       password: "codesmith"}),
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })
//         .then(res => res.json())
//         .then(result => {result}
//         )};
      
//   getData = () =>{fetch('https://api.seatgeek.com/2/events?client_id=MjMwODQ2OTZ8MTYzMDA5MTEwMy4xMjAzNg&geoip=true&performers.slug=los-angeles-dodgers')
//   .then(response => response.json())
//   .then(data => console.log(data))}
  
 // getData();
  return(
      
      
      <Router>
        
        <Route exact path="/" component={App}> 
        
            <h1 className="primary">THE NOSEBLEEDS</h1>
            <h3>Hello and welcome!</h3>
            <input placeholder="username"></input>
            <input placeholder="password"></input>
            <Link to='/test'><button type="button" className="buttons">Login</button></Link>
            <button type="button" className="buttons">Sign up</button>
        
        </Route>
        <Route path="/test" component={TestComp}>
            <TestComp />
        </Route>
        
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

