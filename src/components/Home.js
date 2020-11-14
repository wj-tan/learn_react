import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel, Table, ToastBody } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moment from "moment";

//created by typing cc enter
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedMode: "",
        }
    }
    render() {
        return (<span>
            <p class="textwrap">
                <pre class="tab"></pre>
                <pre class="tab"></pre>
                <pre class="tab"></pre>
                <pre class="tab"></pre>
                <pre class="tab"></pre>

                <h1 id="header">WELCOME</h1>

                <h1 id="name">{this.props.profile.name}</h1>
                <h1 id="nric">{this.props.profile.nric}</h1>

                <pre class="tab"></pre>

            </p>

            <pre class="tab"></pre>

            <div id="container_buttons">
                <NavLink class="a_demo_four" to='/NewAppointment1'>Register New Appointment</NavLink>
            </div>

            <pre class="tab"></pre>
            <pre class="tab"></pre>
            <pre class="tab"></pre>

            {/* <p class="btnwrap">
                <a class="button-one" title="Relevant Title" href="#">Upcoming</a><a class="button-two" title="Relevant Title" href="#"> Missed</a><a class="button-three" title="Relevant Title" href="#">  Open </a>
            </p> */}

            

            <pre class="tab"></pre>
            <pre class="tab"></pre>

            {/* <h2 id="textbelow" >There are no appointment(s)</h2> */}

        </span>);
    }
}

export default Home;