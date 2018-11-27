import React, { Component } from 'react';
import "./App.css";
import Home from './components/Home/Home';
import Particle from './components/Particle/Particle';


class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Particle/>
        
      </div>
    );
  }
}

export default App;
