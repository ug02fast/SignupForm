import React, { Component } from 'react';
import logo from './logo.svg';
import ScrollForm from './components/scroll_form';
import './App.css';

class App extends Component {
  showResies = values => {
    console.log('app area now'); 
    new Promise(resolve => {
      setTimeout(() => {
        console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        resolve();
      }, 500);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <ScrollForm onSubmit={this.showResies} />
        </div>
      </div>
    );
  }
}

export default App;
