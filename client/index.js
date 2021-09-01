import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import styles from './scss/styles.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';

render (<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
