import React, { Component } from 'react';
import { Form, Button, Col, Row, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class NewAppointment2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Branches</h1>
                <Button>Home Team Academy</Button>
                <br></br>
                <Button>Civil Defence Academy</Button>
                <br></br>
                <Button>SCDF HQ</Button>
            </div>
         );
    }
}
 
export default NewAppointment2;