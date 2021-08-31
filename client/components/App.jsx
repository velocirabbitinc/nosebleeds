import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';


const axios = require('axios');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div>
          <p>Testing</p>
      </div>
    );
  }
}

export default hot(App);
