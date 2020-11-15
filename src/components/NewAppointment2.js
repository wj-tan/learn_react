import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import hta_logo from '../img/hta_logo.jpg'

class NewAppointment2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <span>
                <pre class="tab"></pre>
                <h1>Branches</h1>
                <pre class="tab"></pre>
                <pre class="tab"></pre>
                <div id="branchesbtn">
                        {/* <NavLink to="/NewAppointment3_1"><Button id = "htabtn" size="lg">Home Team Academy</Button></NavLink> */}
                        <div id="NewAppointment2_hta_btn">
                            <NavLink class="NewAppointment2_hta_btn" to='/NewAppointment3_1'>Home Team Academy</NavLink>
                        </div>
                        <pre class="tab"></pre>
                        {/* <img src={hta_logo} id = 'hta_logo'></img> */}
                        <pre class="tab"></pre>
                        <pre class="tab"></pre>
                        <pre class="tab"></pre>
                        {/* <NavLink to="/NewAppointment3_2"><Button id = "cdabtn" size="lg">Civil Defence Academy</Button></NavLink> */}

                        <NavLink class="NewAppointment2_cda_btn" to='/NewAppointment3_2'>Civil Defence Academy</NavLink>

                        <pre class="tab"></pre>
                        <pre class="tab"></pre>
                        <pre class="tab"></pre>
                        <pre class="tab"></pre>
                        {/* <NavLink to="/NewAppointment3_3"><Button id = "scdfhqbtn" size="lg">SCDF HQ</Button></NavLink> */}

                        <NavLink class="NewAppointment2_scdfhq_btn" to='/NewAppointment3_3'>SCDF HQ</NavLink>
                </div>
            </span>
         );
    }
}
 
export default NewAppointment2;