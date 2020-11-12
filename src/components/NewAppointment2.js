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
            <span>
                <Form>
                <h1>Branches</h1>
                <pre class="tab"></pre>
                <pre class="tab"></pre>
                <pre class="tab"></pre>
                <div id="branchesbtn">
                    <a href="NewAppointment3"><Button id = "htabtn" size="lg">Home Team Academy</Button></a>
                    <pre class="tab"></pre>
                    <pre class="tab"></pre>
                    <Button id= "cdabtn" size="lg">Civil Defence Academy</Button>
                    <pre class="tab"></pre>
                    <pre class="tab"></pre>
                    <Button id="scdfhqbtn" size="lg">SCDF HQ</Button>
                </div>
                </Form>
            </span>
         );
    }
}
 
export default NewAppointment2;