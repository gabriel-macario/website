import React, { Component } from 'react';
import Home from '../Home/Home';
import Particle from '../Particle/Particle';



class Frontpage extends Component {
  render() {
    return (
      <div>
        <Home />
        <Particle/>
      </div>
    );
  }
}

export default Frontpage;
