import React, { Component } from 'react';
import Home from '../Home/Home';
import Particle from '../Particle/Particle';
import SimpleNav from '../SimpleNav/SimpleNav';
import Favicons from '../Favicons/Favicons';

class Frontpage extends Component {
  render() {
    return (
      <div>
        <Home/>
        <SimpleNav/>
        <Favicons/>
        <Particle/>
        
      </div>
    );
  }
}

export default Frontpage;
