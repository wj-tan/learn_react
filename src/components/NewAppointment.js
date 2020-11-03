import React, { Component } from 'react';

class NewAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Make An Appointment</h1>
                <h3>For Pre-Registration</h3>
                <button>Select Branch</button>
                <h1>Or</h1>
                <h3>For Walk-In</h3>
                <button>Scan QR Code</button>
            </div>
         );
    }
}
 
export default NewAppointment;