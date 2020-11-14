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

        var date = new Date().getDate(); //To get the Current Date
        var month = new Date().getMonth() + 1; //To get the Current Month
        var year = new Date().getFullYear(); //To get the Current Year
        var hours = new Date().getHours(); //To get the Current Hours
        var min = new Date().getMinutes(); //To get the Current Minutes
        // var obDate = new Date.parse((month+date+year));
        // var obDate = new Date(year+"-"+month+"-"+date);
        var myDate = new Date(year + "-" + month + "-" + date);
        var date2 = new Date().getDate() + 1;

        this.state = {
            selectedMode: "",
            currentTime: (year + "-" + month + "-" + date).toString()
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
                <a href="NewAppointment1" class="a_demo_four">Register New Appointment</a>
            </div>

            <pre class="tab"></pre>
            <pre class="tab"></pre>
            <pre class="tab"></pre>

            {/* <p class="btnwrap">
                <a class="button-one" title="Relevant Title" href="#">Upcoming</a><a class="button-two" title="Relevant Title" href="#"> Missed</a><a class="button-three" title="Relevant Title" href="#">  Open </a>
            </p> */}

            <div id="mode">
                <Row>
                    <Col>
                        <Button variant="primary" size="lg" onClick={() => this.setState({ selectedMode: 'Upcoming' })}>Upcoming</Button>
                    </Col>
                    <Col>
                        <Button variant="primary" size="lg" onClick={() => this.setState({ selectedMode: 'Past' })}>Past</Button>
                    </Col>
                </Row>
            </div>
            <div id="map">
                {
                    (this.props.appointments) && console.log(
                        this.props.appointments.filter(appointment => appointment.purpose == 'FFI')

                    )

                }
                {(() => {
                    switch (this.state.selectedMode) {
                        case 'Upcoming':
                            return (<Table>
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Branch</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {(this.props.appointments) && this.props.appointments.filter(appointment => (appointment.date >= this.state.currentTime) ).map((appointment, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{appointment.branch}</td>
                                                <td>{appointment.date}</td>
                                                <td>{appointment.time}</td>
                                                <td>{appointment.purpose}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>

                            </Table>);

                        case 'Past':
                            return (<Table>
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Branch</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {(this.props.appointments) && this.props.appointments.filter(appointment => (appointment.date < this.state.currentTime)).map((appointment, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{appointment.branch}</td>
                                                <td>{appointment.date}</td>
                                                <td>{appointment.time}</td>
                                                <td>{appointment.purpose}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>

                            </Table>);
                        default:
                            return '';
                    }
                })()}
            </div>

            <pre class="tab"></pre>
            <pre class="tab"></pre>

            <h2 id="textbelow" >There are no appointment(s)</h2>

        </span>);
    }
}

export default Home;