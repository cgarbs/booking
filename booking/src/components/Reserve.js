import React, { Component } from 'react';

class Reserve extends Component {

    state = {
        list: []
    }

    componentDidMount = () => {
        // Pull list of titles and times from json or db
        let newList = [{ id: 1, title: "Dracula's Lair", time: "11:30am", booked: false },
                        { id: 2, title: "Cyber Heist", time: "11:45am", booked: false }, 
                        { id: 3, title: "Russian Nightmare", time: "12:00pm", booked: false },  
                        { id: 4, title: "Express Murder Mystery", time: "12:15pm", booked: false }]
                        // Mock list ^ Model to include description, photos, difficulty, etc...
        this.setState({ list: newList });
    }

    displayList = () => {
        console.log("===>", this.state.list)
        return this.state.list.map((e) => {
          return ( <div key={e.id}> <p>{e.title} {e.time} <button>BOOK NOW</button></p> </div> );
          // Button = link to unique event reservation
        });
      };


    render() {
        return (
            <div className="main">
                <div className="reserve">
                    {this.displayList()}
                </div>
            </div>
        );
    }
}

export default Reserve;