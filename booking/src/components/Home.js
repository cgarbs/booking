import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <h1><Link to="/Reserve">Reserve</Link></h1>
                <h1><Link to="/Create">Create</Link></h1>
            </div>
        );
    }
}

export default Home;