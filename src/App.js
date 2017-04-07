import React, { Component } from 'react';
import logo from './logo.svg';
import ScrollForm from './components/scroll_form';
import './App.css';

class App extends Component {
  submit() {
    console.log('app area now'); 
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <ScrollForm onSubmit={this.submit} />
        </div>
      </div>
    );
  }
}

export default App;
