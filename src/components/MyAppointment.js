import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel, Table } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class MyAppointment extends Component {
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
            test : ''
        }
    }


    render() { 
        return ( 
        
        <span>
            <h1>My Appointment(s)</h1>
            <br></br>
            <div id="branch">
                <Row>
                    <Col>
                        <Button variant="primary" size="lg" onClick={() => this.setState({ selectedMode: 'Upcoming' })}>Upcoming</Button>
                    </Col>
                    <Col>
                        <Button variant="primary" size="lg" onClick={() => this.setState({ selectedMode: 'Past' })}>Past</Button>
                    </Col>
                    <Col>
                        <Button variant="primary" size="lg" onClick={() => this.setState({ selectedMode: 'All' })}>All</Button>
                    </Col>
                </Row>
            </div>
            <div id = 'center'>
                        {(() => {
                    switch (this.state.selectedMode) {
                        case 'Upcoming':
                            return (<Table id="tablex">
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Branch</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Action</th>
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
                                                <td><NavLink to="/ManageAppointment" ><Button onClick={() => this.props.handleSelect(appointment.id)}>Manage</Button></NavLink></td>
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
                                        <th>Action</th>
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
                                                <td><NavLink to="/ManageAppointment" ><Button onClick={() => this.props.handleSelect(appointment.id)}>Manage</Button></NavLink></td>
                                            </tr>
                                        )
                                    })}

                                </tbody>

                            </Table>);
                        case 'All':
                            return (<Table>
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Branch</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(this.props.appointments) && this.props.appointments.map((appointment,index)=>{
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{appointment.branch}</td>
                                                <td>{appointment.date}</td>
                                                <td>{appointment.time}</td>
                                                <td><NavLink to="/ManageAppointment" ><Button onClick={() => this.props.handleSelect(appointment.id)}>Manage</Button></NavLink></td>
                                            </tr>
                                        )
                                    })} 
                                </tbody>
                            </Table> )
                        default:
                            return(
                            <Table>
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Branch</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {(this.props.appointments) && this.props.appointments.map((appointment,index)=>{
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{appointment.branch}</td>
                                                <td>{appointment.date}</td>
                                                <td>{appointment.time}</td>
                                                <td><NavLink to="/ManageAppointment" ><Button onClick={() => this.props.handleSelect(appointment.id)}>Manage</Button></NavLink></td>
                                            </tr>
                                        )
                                    })}
                                     
                                </tbody>
                            </Table> )
                    }
                })()}
                        
                            
            </div>
        </span> );
    }
}
 
export default MyAppointment;