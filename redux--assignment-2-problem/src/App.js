import React, { Component } from 'react';
import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
          <li>First we need to create store folder with reducer and actions files</li>
        </ol>
        <Persons />
      </div>
    );
  }
}

export default App;
