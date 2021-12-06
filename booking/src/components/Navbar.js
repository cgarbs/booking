import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import Home from './Home.js'
// import Create from './Create.js'
// import Reserve from './Reserve.js'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <h3><Link to="/">Home</Link></h3>
                <h3><Link to="/reserve">Reserve</Link></h3>
                <h3><Link to="/create">Create</Link></h3>
            </div>
        );
    }
}

export default Navbar;