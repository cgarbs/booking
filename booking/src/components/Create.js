import React, { Component } from 'react';

class Create extends Component {

    state = {
        newBooking: {}
    }

    createBooking = () => {
        // Form to include:
        //-Company (parent)
        //-Event (type)
        //-Title
        //-Time
        //-Duration
        //-Location
        //-Description
        //-Media
        //-Links
    }

    render() {
        return (
            <div className="create">
                Create Booking
            </div>
        );
    }
}

export default Create;