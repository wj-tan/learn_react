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
                <h1 style="colour:blue;">Make An Appointment</h1>
                <pre class="tab"></pre>
                <h3>For Pre-Registration</h3>
                <pre class="tab"></pre>
                
                <div id="branchbtn">
                    <Button size="lg">Select Branch</Button>
                </div>
                <h3>For Walk-In</h3>
                <div id="qrbtn">
                    <Button size="lg">Scan QR Code</Button>
                </div>
            </div>
         );
    }
}
 
export default NewAppointment;