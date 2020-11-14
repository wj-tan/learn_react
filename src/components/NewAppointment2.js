import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

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
                    <NavLink to="/NewAppointment3_1"><Button id = "htabtn" size="lg">Home Team Academy</Button></NavLink>
                    <pre class="tab"></pre>
                    <pre class="tab"></pre>
                    <NavLink to="/NewAppointment3_2"><Button id = "cda" size="lg">Civil Defence Academy</Button></NavLink>
                    <pre class="tab"></pre>
                    <pre class="tab"></pre>
                    <NavLink to="/NewAppointment3_3"><Button id = "scdfhq" size="lg">SCDF HQ</Button></NavLink>
                </div>
                </Form>
            </span>
         );
    }
}
 
export default NewAppointment2;