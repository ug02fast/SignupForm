import React, { Component } from 'react';
//import logo from './logo.svg';
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
        <div className='form-container'>
          <ScrollForm onSubmit={this.showResies} />
        </div>
      </div>
    );
  }
}

export default App;
