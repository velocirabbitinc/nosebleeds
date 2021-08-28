import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  getUsers = () => { 
    fetch("/post", {
      method: 'POST',
      body: JSON.stringify(
      {username : "Daniel12", 
      password: "codesmith"}),
      headers: {
          'Content-Type': 'application/json',
      }
  })
  .then(res => res.json())
  .then(result => {result}
  )};

  render() {
    return(
        <div >
            <button onClick={this.getUsers}> click me!</button>
            <strong>Hello</strong>
      
      </div>
    );
  }
}

export default App;
//onLoad={this.getUsers()}