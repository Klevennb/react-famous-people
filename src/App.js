import React, { Component } from 'react';
import Header from './Components/header';
import FamousPerson from './Components/FamousPerson';
import './App.css';


class App extends Component {
 

  render() {
    return (
      <div className="App">
        <Header />
        <FamousPerson />
      </div>
    );
  }
}

export default App;
