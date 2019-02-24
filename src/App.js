import React, { Component } from 'react';
import { Browserrouter}  from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Browserrouter>
        <div className="App">
          <h1>MarioPlan</h1>
        </div>
      </Browserrouter>
    );
  }
}

export default App;
