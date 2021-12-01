import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// { Switch, Route, Redirect }

import Create from './components/Create.js'
import Reserve from './components/Reserve.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Create />
        <Reserve />
      </div>
    );
  }

}

export default App;
