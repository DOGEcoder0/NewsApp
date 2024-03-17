import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  x = "dharmendra";
  render() {
    return (
      <div>
        hello my first class based componants and {this.x}
      </div>
    )
  }
}
