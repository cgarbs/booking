import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import Home from './Home.js'
// import Create from './Create.js'
// import Reserve from './Reserve.js'

class Navbar extends Component {
    render() {
        return (
            <div>
                <h1><Link to="/">Home</Link></h1>
                <h1><Link to="/reserve">Reserve</Link></h1>
                <h1><Link to="/create">Create</Link></h1>
            </div>
        );
    }
}

export default Navbar;