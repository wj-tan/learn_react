import React, { Component } from 'react';
import { Form, Button, Col, Row, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

class NewAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1 id="makeappointment">Make An Appointment</h1>
                <pre class="tab"></pre>
                <h3>For Pre-Registration</h3>
                <pre class="tab"></pre>
                
                <div id="branchbtn">
                    <NavLink to="NewAppointment2"><Button size="lg">Select Branch</Button></NavLink>
                </div>
                <pre class="tab"></pre>
                <pre class="tab"></pre>
                <h3>For Walk-In</h3>
                <pre class="tab"></pre>
                <div id="qrbtn">
                    <Button size="lg">Scan QR Code</Button>
                </div>
            </div>
         );
    }
}
 
export default NewAppointment;