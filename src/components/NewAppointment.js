import React, { Component } from 'react';
import { Form, Button, Col, Row, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

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
                <div id="selectbranchbtn">
                    <Button>Select Branch</Button>
                </div>
                <h1>Or</h1>
                <h3>For Walk-In</h3>
                <div id="scanqrbtn">
                    <Button>Scan QR Code</Button>
                </div>
            </div>
         );
    }
}
 
export default NewAppointment;