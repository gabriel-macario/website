import React, { Component } from 'react';
import("./Home.css")


export default class Header extends Component {
  render() {
    return (
      <div className="homeContainer">

        <div className="titleDiv">
          <div className="text-center name">
            <p >Aaron Sy </p>
          </div>
          <div className="text-center title">
            <p> Full Stack Web Developer </p>
          </div>
        </div>


        <div className="simpleNav text-center">
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
