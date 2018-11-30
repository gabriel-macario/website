import React, { Component } from 'react'
import "./SimpleNav.css"
export default class SimpleNav extends Component {
  render() {
    return (
      <div>
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
