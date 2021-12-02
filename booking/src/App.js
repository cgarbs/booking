import './App.css';
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
// { Switch?, Route, Routes, Redirect }

import Home from './components/Home.js'
import Create from './components/Create.js'
import Reserve from './components/Reserve.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Routes> {/* Switch? */}
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/reserve" render={(props) => <Reserve {...props} />} />
          <Route exact path="/create" render={(props) => <Create {...props} />} />
        </Routes>
      </div>
    );
  }

}

export default App;
