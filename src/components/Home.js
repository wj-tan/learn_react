import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel, Table, ToastBody } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//created by typing cc enter
class Home extends Component {
    constructor(props) {
        super(props);
        var date = new Date().getDate(); //To get the Current Date
        var month = new Date().getMonth() + 1; //To get the Current Month
        var year = new Date().getFullYear(); //To get the Current Year
        var hours = new Date().getHours(); //To get the Current Hours
        var min = new Date().getMinutes(); //To get the Current Minutes

        this.state = {
            selectedMode: "",
            currentTime: (year + "-" + month + "-" + date),
            currentHour: parseInt(hours),
            currentMin: (min),
            last2 : '',
            twentyfourhrs : '',
            exampleTime : ''
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
                {/* <h2 id="datetime">{this.state.currentHour}</h2>
                <h2 id="datetime">{this.state.currentMin}</h2> */}
            </p>

            <pre class="tab"></pre>

            <div id="container_buttons">
                <NavLink class="a_demo_four" to='/NewAppointment1'>Register New Appointment</NavLink>
            </div>

            <pre class="tab"></pre>
            <pre class="tab"></pre>
            <pre class="tab"></pre>

            <div id = 'center'>
            {(() => {
                if (this.props.appointments.filter(appointment => (appointment.date == this.state.currentTime))){
                    // (this.props.appointments) && this.props.appointments.filter(appointment => (appointment.date == this.state.currentTime)).map((appointment) => {
                    //     this.state.exampleTime = appointment.time;
                    //     this.state.last2 = this.state.exampleTime.slice(-2);
                    //     this.state.twentyfourhrs = appointment.time.slice(0,-2)
                    // });
                    // if (this.state.last2 == 'PM'){
                    //     this.state.twentyfourhrs =  parseInt(this.state.twentyfourhrs)+12
                    // }
                    // if (15 - this.state.twentyfourhrs == 1){
                        return (
                            <Table id="tablex">
                                <thead>
                                    <tr>
                                        <th>Branch</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Purpose</th>
                                        <th>ETA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(this.props.appointments) && this.props.appointments.filter(appointment => (appointment.date == this.state.currentTime && (this.state.currentHour-parseInt(appointment.time.slice(0,-3)) <= 1) && (this.state.currentHour-parseInt(appointment.time.slice(0,-3)) > 0))).map((appointment, index) => {
                                        return (
                                            <tr>
                                                <td>{appointment.branch}</td>
                                                <td>{appointment.date}</td>
                                                <td>{appointment.time}</td>
                                                <td>{appointment.purpose}</td>
                                                <td>{(this.state.currentHour-parseInt(appointment.time.slice(0,-3)))} hr </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>);
                    // }
                }
                // if appt date&time == systemdate&time -15mins, display
            })()} 
            </div>

            

            <pre class="tab"></pre>
            <pre class="tab"></pre>

            {/* <h2 id="textbelow" >There are no appointment(s)</h2> */}

        </span>);
    }
}

export default Home;