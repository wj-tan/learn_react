import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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