import React, { Component } from 'react';
import ("./Home.css")


export default class Header extends Component {
  render() {
    return (
      <div className = "homeContainer">
       
       <div className = "titleDiv">
        <p className = "text-center name">Aaron Sy </p>
        <p className = "text-center title"> Full Stack Web Developer </p>
        </div>
      

      <div className = "simpleNav">
          <ul>
            <li>Portfolio</li>
            <li> | </li>
            <li>Resume</li>
            <li> | </li>
            <li>Contact</li>
          </ul>
      </div>
      </div>
    )
  }
}
