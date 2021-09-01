import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <MainContainer />
      </div>
    );
  }
}

export default hot(App);
