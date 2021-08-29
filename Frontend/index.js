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
        Switch 
    } from 'react-router-dom';

import TestComp from './component/testcomp';
import './styles/styles.css'

const App = () => {
    //let history = useHistory();

    return(
        <Router>
        
        <Route exact path="/" component={App}> 
        
            <h1 className="primary">Recspace</h1>
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

