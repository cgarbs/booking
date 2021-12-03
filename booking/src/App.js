import './App.css';
import React, { Component } from "react";
import { Routes, Route, Link, Redirect } from "react-router-dom";

import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Create from './components/Create.js'
import Reserve from './components/Reserve.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/reserve' element={<Reserve />} />
          <Route exact path='/create' element={<Create />} />
        </Routes>
      </div>
    );
  }

}

export default App;
