import React, { Component } from 'react';

class Reserve extends Component {

    state = {
        list: ["Dracula's Lair", "Cyber Heist", "Russian Nightmare"]
    }

    getList = () => {
        // Get list of time slots from json or db
        // let newList = ["Dracula's Lair", "Cyber Heist", "Russian Nightmare"]
        // this.setState({ list: newList });
    }

    displayList = () => {
        return this.state.list.map((e) => {
          return ( <h1>{e}</h1> );
        });
      };


    render() {
        // {this.getList()}
        return (
            <div>
                {this.displayList()}
            </div>
        );
    }
}

export default Reserve;